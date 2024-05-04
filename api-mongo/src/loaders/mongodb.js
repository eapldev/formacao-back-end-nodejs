const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect("mongodb+srv://eduardoap:a1b2c3d4e5@cluster0.yonvwfr.mongodb.net/");
}

module.exports = startDB;
