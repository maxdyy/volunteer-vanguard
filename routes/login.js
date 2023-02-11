const express = require("express");
const router = express.Router();

// Home Page
router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login",
        currentYear: new Date().getFullYear()
    });
});


// Routes Export
module.exports = router;