const express = require("express");
const router = express.Router();
const sitel = require("../public/js/sitel");

router.get("/", (req, res) => {
  // Array to hold list of Primary Categories
  let pcArr = [];
  // Finds each individiual Primary Category
  sitel.forEach((risk) => {
    if (!pcArr.includes(risk.pc)) {
      pcArr.push(risk.pc);
    }
  });

  res.render("index", { riskMatrix: sitel, primCat: pcArr });
});

router.get("/:id", (req, res) => {
  let riskObj;

  sitel.forEach((risk) => {
    if (risk.id.toString() === req.params.id) {
      riskObj = risk;
    }
  });

  if (riskObj === undefined) {
    res.redirect("/");
  } else {
    res.render("risk", { risk: riskObj });
  }
});

module.exports = router;
