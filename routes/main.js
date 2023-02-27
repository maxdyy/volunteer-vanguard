const express = require("express");
const router = express.Router();

// Home Page
router.get("/volunteer-vanguard/", (req, res) => {
    res.render("index", { title: "Home", currentYear: new Date().getFullYear() });
});


// Routes Export
module.exports = router;