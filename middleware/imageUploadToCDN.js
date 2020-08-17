const path = require("path");
const DatauriParser = require("datauri/parser");
const cloudinary = require("cloudinary").v2;
const FileType = require("file-type");

module.exports = async (req, res, next) => {
  try {
    const images = [];
    const parser = new DatauriParser();

    const uploadImagePromises = req.files.map(async (file) => {
      const buffer = file.buffer;
      const fileType = await FileType.fromBuffer(buffer);

      const parsedFile = parser.format("." + fileType.ext, buffer).content;

      const res = await cloudinary.uploader.upload(parsedFile);
      images.push(res.public_id + "." + res.format);
    });

    await Promise.all([...uploadImagePromises]);

    req.images = images;

    next();
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Unable to create Listing", detail: error });
  }
};
