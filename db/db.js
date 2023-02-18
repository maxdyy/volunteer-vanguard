const mysql = require("mysql2");

// DataBase Configuration
const dbCon = mysql.createConnection({
    host: "localhost",
    user: "vanguard",
    password: "vanguard",
    database: "vanguard",
});

// DB export
module.exports = dbCon;