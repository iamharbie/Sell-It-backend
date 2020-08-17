const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");
const Datauri = require("datauri");
const path = require("path");
const store = require("../store/listings");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageUploadToCDN = require("../middleware/imageUploadToCDN");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings");
const config = require("config");

const Category = require("../models/category");
const Listing = require("../models/listing");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const multerUploads = multer({
  storage: multer.memoryStorage(),
  limits: { fieldSize: 25 * 1024 * 1024 },
}).array("images");

// const dUri = new Datauri();
// const dataUri = (req) =>
//   dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

const schema = {
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(1),
  categoryId: Joi.string().required().min(1),
  location: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  }).optional(),
};

const validateCategoryId = async (req, res, next) => {
  if (!(await Category.findById(req.body.categoryId)))
    return res.status(400).send({ error: "Invalid categoryId." });

  next();
};

router.get("/", async (req, res) => {
  const listings = await Listing.find({});

  const resources = listings.map(listingMapper);
  console.log("reg", listings);
  res.send(resources);
});

router.get("/:userId", async (req, res) => {
  const listings = await Listing.find({ userId: req.params.userId });
  const resources = listings.map(listingMapper);

  res.send(resources);
});

router.post(
  "/",
  [
    // Order of these middleware matters.
    // "upload" should come before other "validate" because we have to handle
    // multi-part form data. Once the upload middleware from multer applied,
    // request.body will be populated and we can validate it. This means
    // if the request is invalid, we'll end up with one or more image files
    // stored in the uploads folder. We'll need to clean up this folder
    // using a separate process.
    auth,
    multerUploads,
    validateWith(schema),
    validateCategoryId,
    imageUploadToCDN,
  ],

  async (req, res) => {
    const listing = {
      title: req.body.title,
      price: parseFloat(req.body.price),
      categoryId: req.body.categoryId,
      description: req.body.description,
    };
    listing.images = req.images.map((filename) => ({ fileName: filename }));
    if (req.body.location) listing.location = JSON.parse(req.body.location);
    listing.userId = req.user.userId;
    let l = new Listing(listing);
    await l.save();

    res.status(201).send(l);
  }
);

module.exports = router;
