const mongoose = require("mongoose");

const connectToDB = async function () {
  const uri =
    "mongodb+srv://renaissance:renaissance@cluster0.lplcs.mongodb.net/sellIt?retryWrites=true&w=majority";
  await mongoose
    .connect(uri)
    .then(() => console.info(`Connected to mongoDB...`))
    .catch((e) => console.error(e));
};

// connectToDB();
module.exports = connectToDB;
