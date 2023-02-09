const express = require("express");
const myDevicesRouter = express.Router();
const appDB = require("../db/db");

// All devices dashboard page
myDevicesRouter.get("/myDevices", (req, res) => {
  appDB.query("SELECT * FROM devices", (err, results) => {
    if (err) {
      throw err;
    }

    res.render("myDevices", {
      title: "My Devices",
      currentYear: new Date().getFullYear(),
      devices: results,
      deviceDeleted: req.query.deviceDeleted,
    });
  });
});

module.exports = myDevicesRouter;
