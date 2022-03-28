const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  restaurant: String,
  products: [
    { produc: String, price: Number, description: String, date: Date },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
