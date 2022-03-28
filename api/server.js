// Import all required packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
// Express app and json parsing
app.use(bodyParser.json());

const ResteaturantRoutes = require("./routes/restaurants");
app.use("/restaurants", ResteaturantRoutes);

mongoose
  .connect("mongodb://localhost/restaurants_57blocks")
  .then(console.log("connected to restaurants_57blocks"))
  .catch((err) => console.log(err));

// listen in preset port or 8000
app.listen(process.env.PORT || 8000);
