const express = require("express");
const myDeviceRouter = express.Router();
const appDB = require("../db/db");

// Device detail page GET request with the device ID as a parameter
myDeviceRouter.get("/myDevice/:id", (req, res) => {
  const { id } = req.params;

  appDB.query(`SELECT * FROM devices WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }

    res.render("myDevice", {
      title: "My Device",
      currentYear: new Date().getFullYear(),
      device: results[0],
      deviceUpdated: req.query.deviceUpdated,
    });
  });
});

// Delete device POST request
myDeviceRouter.post("/deleteDevice", (req, res) => {
  const { id } = req.body;
  appDB.query(`DELETE FROM devices WHERE id = ${id};`, (err, results) => {
    if (err || results.affectedRows === 0) {
      res.redirect("/myDevices?deviceDeleted=false");
    } else {
      res.redirect("/myDevices?deviceDeleted=true");
    }
  });
});

// Power device POST request
myDeviceRouter.post("/powerDevice", (req, res) => {
  const { online, id } = req.body;

  // Update the device online status
  appDB.query(
    `UPDATE devices SET online = ${online} WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Edit Name Device POST request
myDeviceRouter.post("/editNameDevice", (req, res) => {
  const { name, id } = req.body;

  // Update the device name
  appDB.query(
    `UPDATE devices SET name = '${name}' WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Edit Location Device POST request
myDeviceRouter.post("/editLocationDevice", (req, res) => {
  const { location, id } = req.body;

  // Update the device location
  appDB.query(
    `UPDATE devices SET location = '${location}' WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Lock device POST request (only for the lock device type)
myDeviceRouter.post("/lockDevice", (req, res) => {
  const { id, unlocked } = req.body;

  // Update the device lock status
  appDB.query(
    `UPDATE devices SET unlocked = ${unlocked} WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Open Percentage Device POST request (only for the blinds device type)
myDeviceRouter.post("/openPercentageDevice", (req, res) => {
  const { id, openPercentage } = req.body;

  // Update the device open percentage value
  appDB.query(
    `UPDATE devices SET openPercentage = ${openPercentage} WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Edit device temperature POST request
myDeviceRouter.post("/temperatureDevice", (req, res) => {
  const { id, temperature } = req.body;

  // Update the device temperature value
  appDB.query(
    `UPDATE devices SET temperature = ${temperature} WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Edit device temperature and fan speed POST request (only for the air conditioner device type)
myDeviceRouter.post("/acDevice", (req, res) => {
  const { id, temperature, fanSpeed } = req.body;

  // Update the device temperature and fan speed values
  appDB.query(
    `UPDATE devices SET temperature = ${temperature}, fanSpeed = '${fanSpeed}' WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

// Edit device volume and current channel POST request (only for the TV device type)
myDeviceRouter.post("/tvDevice", (req, res) => {
  const { id, volumePercentage, currentChannel } = req.body;

  // Update the device volume and current channel values
  appDB.query(
    `UPDATE devices SET volumePercentage = ${volumePercentage}, currentChannel = ${currentChannel} WHERE id = ${id};`,
    (err, results) => {
      if (err || results.affectedRows === 0) {
        res.redirect(`/myDevice/${id}?deviceUpdated=false`);
      } else {
        res.redirect(`/myDevice/${id}?deviceUpdated=true`);
      }
    }
  );
});

module.exports = myDeviceRouter;
