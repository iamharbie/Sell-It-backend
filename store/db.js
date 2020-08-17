const mongoose = require("mongoose");

const connectToDB = async function () {
  const uri = process.env.MONGO_URL;
  await mongoose
    .connect(uri)
    .then(() => console.info(`Connected to mongoDB...`))
    .catch((e) => console.error(e));
};

// connectToDB();
module.exports = connectToDB;
