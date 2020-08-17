const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const User = require("../models/user");

const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", validateWith(schema), async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send({ error: "User already registered." });

  user = new User({ email, name, password });
  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.status(201).send(user);
});

router.get("/", async (req, res) => {
  res.send(await User.find({}));
});

module.exports = router;
