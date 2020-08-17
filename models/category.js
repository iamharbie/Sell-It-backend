const mongoose = require("mongoose");

const categories = [
  {
    id: 1,
    name: "Furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white",
  },
];

const categorySchema = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
