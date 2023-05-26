const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "housework_mgt",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Is Up and Running");
  }
});

module.exports = db;
