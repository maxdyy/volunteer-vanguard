const express = require("express");
const router = express.Router();

// Home Page
router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create",
        currentYear: new Date().getFullYear()
    });
});


// Routes Export
module.exports = router;