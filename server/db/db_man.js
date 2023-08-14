const MySql8 = require("mysql8");
const path = require("path");
const fs = require("fs");

const MY_CONFIG = {
  user: "",
  host: "",
  database: "",
  password: "",
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000, //acquire time out
  timeout: 60 * 60 * 1000,
  port: 25060,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, "ca-certificate.crt")),
  },
};

const connection = MySql8.createConnection(MY_CONFIG);

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Is Up and Running");
  }
});

module.exports = connection;
