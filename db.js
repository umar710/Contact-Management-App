const mongoose = require("mongoose");

require("dotenv").config();

const mongooseURL = process.env.MONGOODB_URL; //Define the MongoDB URL from dotEnv file

//Define db function: using Asynchronous Database Connection Function, try , catch Method.
const db = async () => {
  try {
    // Set up MongoDB connection
    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

db(mongoose.connection); // Access the Default Connection Object
module.exports = db; //Export the Database Connection
