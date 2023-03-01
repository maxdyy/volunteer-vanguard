const express = require("express");
const aboutUsRouter = express.Router();

// About Us page
aboutUsRouter.get("/volunteer-vanguard/about", (req, res) => {
    res.render("about", {
        title: "About Us",
        currentYear: new Date().getFullYear(),
    });
});

module.exports = aboutUsRouter;