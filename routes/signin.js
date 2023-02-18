const express = require("express");
const router = express.Router();

// Home Page
router.get("/signin", (req, res) => {
    res.render("signin", {
        title: "Signin",
        currentYear: new Date().getFullYear()
    });
});


// Routes Export
module.exports = router;