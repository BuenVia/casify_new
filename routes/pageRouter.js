const express = require("express");
const router = express.Router();

const Matrix = require("../models/matrixSchema");

router.get("/", (req, res) => {
  Matrix.find({}, (err, foundResults) => {
    if (!err) {
      res.render("index", { riskMatrix: foundResults });
    }
  });
});

router.get("/:primCat/:secCat", (req, res) => {
  Matrix.find({}, (err, foundResults) => {
    if (!err) {
      res.send(foundResults);
    }
  });
});

module.exports = router;
