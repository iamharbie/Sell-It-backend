const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/user");
const Listing = require("../models/listing");

router.get("/:id", auth, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) return res.status(404).send();

  const listings = await Listing.find({ userId });

  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    listings: listings.length,
  });
});

module.exports = router;
