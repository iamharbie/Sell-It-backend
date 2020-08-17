const express = require("express");
const router = express.Router();

const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");
const Listing = require("../models/listing");
const listingMapper = require("../mappers/listings");

router.get("/listings", auth, async (req, res) => {
  const listings = await Listing.find({ userId: req.user.userId });

  const resources = listings.map(listingMapper);
  res.send(resources);
});

module.exports = router;
