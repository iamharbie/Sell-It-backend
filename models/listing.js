const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  images: Array,
  price: Number,
  categoryId: String,
  userId: String,
  locationSchema: locationSchema,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
