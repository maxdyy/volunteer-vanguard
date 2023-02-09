const mysql = require("mysql2");

// DataBase Configuration
const dbCon = mysql.createConnection({
  host: "localhost",
  user: "mySmartHomeUser",
  password: "mySmartHomePassword",
  database: "mySmartHomeDB",
});

// DB export
module.exports = dbCon;