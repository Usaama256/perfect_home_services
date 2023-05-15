const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const bcrypt = require("bcryptjs");
const { verify_email, login_method_user } = require("./methods");

router.post("/signup", async (req, res) => {
  const { email, username, password, phone, location } = req.body;
  if (
    email == null ||
    email == "" ||
    username == null ||
    phone == "" ||
    location == null ||
    phone == ""
  ) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    if (verify_email(email)) {
      const hash = await bcrypt.hash(password, 10);
      const new_user = {
        username,
        email,
        phone,
        location,
        hash,
      };
      db.query("insert into Users set?", new_user, (err) => {
        if (err) {
          console.log(err);
          if (err.errno == 1062) {
            res.status(400).json({ message: "User already exists" });
          } else {
            res.status(400).json({ message: "Bad request" });
          }
        } else {
          //   login_method(email, password);
          res.status(200).json({ message: "User Registerd Successfully" });
        }
      });
    } else {
      res.status(400).json({ message: "Bad Request " });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  login_method_user(email, password, res);
});

router.get("/fetchServices", async (req, res) => {
  db.query("select * from Services", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/fetchSPs", async (req, res) => {
  db.query("select * from ServiceProvider", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/fetchSP/:id", async (req, res) => {
  const id = req.params.id;
  if (id == null || id == "") {
    res.status(400).json("Bad Request");
  } else {
    db.query(
      `select SPname,email,contact,SPtype,SPdescription,location from ServiceProvider where SPid=${id}`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result < 1) {
            res.status(401).json({ message: "Service Provider Doesnt Exist" });
          } else {
            res.status(200).json(result);
          }
        }
      }
    );
  }
});

router.get("/forgot-password", async (req, res) => {});

module.exports = router;
