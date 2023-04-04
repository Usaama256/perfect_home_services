const mysql = require("mysql");

const MYSQL_CONFIG = {
  host: "localhost",
  database: "housework_mgt",
  port: "3300",
  user: "root",
  //password: "root",
};

// const db = mysql.createConnection(MYSQL_CONFIG);
const db = {
  connect: () => {
    console.log("connecting dummy");
  },
};

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Is Up and Running");
  }
});

module.exports = db;
