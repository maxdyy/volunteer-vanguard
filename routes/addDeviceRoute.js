const express = require("express");
const addDeviceRouter = express.Router();
const appDB = require("../db/db");

// Add device page
addDeviceRouter.get("/addDevice", (req, res) => {
  res.render("addDevice", {
    title: "Add Device",
    currentYear: new Date().getFullYear(),
    deviceAdded: null,
  });
});

// Add device page POST request for the form
addDeviceRouter.post("/addDevice", (req, res) => {
  // Get the device data from the form
  const { name, type, location } = req.body;

  appDB.query(
    `INSERT INTO devices (name, type, location, online) VALUES ('${name}', '${type}', '${location}', false);`,
    (err, results) => {
      if (err) {
        res.render("addDevice", {
          title: "Add Device",
          currentYear: new Date().getFullYear(),
          deviceAdded: false,
          errorMessage:
            err.code === "ER_DUP_ENTRY" ? "Device with this name already exists." : err.message,
        });
      } else {
        res.render("addDevice", {
          title: "Add Device",
          currentYear: new Date().getFullYear(),
          deviceAdded: true,
        });
      }
    }
  );
});

module.exports = addDeviceRouter;
