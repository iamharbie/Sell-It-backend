const express = require("express");
const router = express.Router();
const categoriesStore = require("../store/categories");
const Category = require("../models/category");

router.get("/", async (req, res) => {
  const categories = await Category.find({});
  res.send(categories);
});

module.exports = router;
