// Import all required packages
const express = require("express");
const bodyParser = require("body-parser");
const Restaurant = require("../models/restaurant");
const mongoose = require("mongoose");

// Express app and json parsing
const router = express.Router();
router.use(bodyParser.json());

// Post request from fronted interface
router.post("/signup", (req, res) => {
  //data already validated on the frontend side

  //validate email does not exist already

  const { name, email, password, restaurant } = req.body;
  const newRestaurant = new Restaurant({
    name: name,
    email: email,
    password: password,
    restaurant: restaurant,
  });

  newRestaurant
    .save()
    .then((data) => {
      //res.json(data);
      console.log("saved");
      res.status(201).send();
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.get("/login", (req, res) => {
  console.log("login");
  Restaurant.findOne({ email: req.query.email, password: req.query.password })

    .then((data) => {
      console.log("then");
      if (data) {
        res.status(200);
        res.json(data);
      } else {
        res.status(400);
      }

      console.log(data);
    })
    .catch((err) => {
      console.log(res.json({ message: err }));
    });
});

router.get("/validate-email", (req, res) => {
  //console.log(req.query.email);
  Restaurant.findOne({ email: req.query.email })

    .then((data) => {
      if (data) {
        res.status(200).send();
      } else {
        res.status(400).send();
      }
    })
    .catch((err) => {
      console.log(res.json({ message: err }));
    });
});
router.get("/restaurantId", (req, res) => {
  Restaurant.find({ _id: "623a498e79eb22d31486497e" }, { products: 1 })
    .then((data) => {
      console.log("then");

      if (data) {
        res.status(200);
        res.json(data);
      } else {
        res.status(400);
      }

      console.log(data);
    })
    .catch((err) => {
      console.log(res.json({ message: err }));
    });
});
function f(arr, i, n) {
  if (i == n - 1) {
    return arr[1];
  }
  if (i == 0) {
    return arr[i] + f(arr, i + 1, n) / n;
  } else {
    return arr[i] + f(arr, i + 1, n);
  }
}

router.get("/austin", (req, res) => {
  const list = [1, 2, 3];
  const myF = f(list, 0, list.length);
  console.log(myF);
});

module.exports = router;
