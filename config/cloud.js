const { config } = require("cloudinary").v2;
const cloudinaryConfig = () =>
  config({
    cloud_name: "dvvmt82th",
    api_key: "796286422327627",
    api_secret: "sWD9qPJpYtPYEmrC0EpD9nC1Gbg",
  });
module.exports = cloudinaryConfig;
