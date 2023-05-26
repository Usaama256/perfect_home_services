const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const bcrypt = require("bcryptjs");
const { verify_email, loginMtdUser } = require("./methods");

//API for registering the client
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

//API to sign in the client
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  loginMtdUser(email, password, res);
});

//API for viewing services
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

//API for viewing all service providers
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

//API for viewing a single service provider the client
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

//API to call when the user forgets their password
router.post("/forgotPassword", async (req, res) => {
  try {
    const email = req.body;
    if (email == null || email == "") {
      res.status(400).json("Bad request");
    } else {
      db.query(
        `select email,hash from Users where email="${email}"`,
        (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).json("Something went wrong");
          } else {
            res.json(result);
            // if (result <= 0) {
            //   //here we send a sucess status to protect the data from being analyzed by unauthorized users
            //   res.status(200).json("Password reset link sent to your email");
            // } else {
            // }
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
});

//API for sending comments about the service provider
router.post("/pushReview/:id", async (req, res) => {
  try {
    const Uid = req.params.id;
    const { Spid, review } = req.body;
    if (Spid == null || Spid == "" || review == null || review == "") {
      res.status(400).json("Bad request");
    } else {
      db.query("select SPid from ServiceProvider", (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (Spid != result[0].SPid) {
            res.status(400).json("Invalid request");
          } else {
            db.query(
              `insert into Review set SPid="${Spid}", Reviews="${review}",Uid="${Uid}"`,
              (err) => {
                if (err) {
                  console.log(err);
                  res.status(500).json("Something Went wrong");
                } else {
                  res.status(200).json("Success");
                }
              }
            );
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
