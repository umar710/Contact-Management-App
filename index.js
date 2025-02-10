const express = require("express");
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const db = require("./db");

// Routes
app.use("/contacts", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
