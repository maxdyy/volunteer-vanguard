const express = require("express");
const router = express.Router();

// Home Page
router.get("/listing", (req, res) => {
  res.render("listing", {
    title: "Listing",
    currentYear: new Date().getFullYear(),
  });
});

// Routes Export
module.exports = router;
