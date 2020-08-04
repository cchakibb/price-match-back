const express = require("express");
const router = express.Router();
const Hotel = require("./../models/Hotel");

router.route("/data").post((req, res, next) => {
  console.log(req.body.hotels);
  Hotel.create(req.body.hotels)
    .then((newData) => {
      res.status(201).json(newData);
    })
    .catch((error) => res.status(500).json(error));
});

router.route("/").get((req, res, next) => {
  
  Hotel.find(req.query)
 
    .then((hotels) => {
      res.status(201).json(hotels);
    })
    .catch((error) => res.status(500).json(error));
});





module.exports = router;
