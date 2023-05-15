const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const bcrypt = require("bcryptjs");
const { verify_email, login_method_admin } = require("./methods");

router.post("/register", async (req, res) => {
  const { FirstName, SecondName, email, username, password, phone, location } =
    req.body;
  if (
    FirstName == null ||
    FirstName == "" ||
    SecondName == null ||
    SecondName == "" ||
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
      const new_admin = {
        FirstName,
        SecondName,
        username,
        email,
        phone,
        location,
        hash,
      };
      db.query("insert into Admin set?", new_admin, (err) => {
        if (err) {
          console.log(err);
          if (err.errno == 1062) {
            res.status(400).json({ message: "Admin already registerd" });
          } else {
            res.status(400).json({ message: "Bad request" });
          }
        } else {
          //   login_method(email, password);
          res.status(200).json({ message: " Registerd Successfully" });
        }
      });
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  login_method_admin(email, password, res);
});

router.get("/viewUsers", async (req, res) => {
  db.query("select * from Users", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/viewSPs", async (req, res) => {
  db.query("select * from ServiceProvider", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/addService", async (req, res) => {
  try {
    const { Sname, Sdescription, images } = req.body;

    if (
      Sname == "" ||
      Sname == null ||
      Sdescription == "" ||
      Sdescription == null ||
      images == "" ||
      images == null
    ) {
      res.status(404).json("Bad Request");
    } else {
      const new_service = {
        Sname,
        Sdescription,
        images,
      };
      db.query("insert into Services set ?", new_service, (err) => {
        if (err) {
          console.log(err);
          if (err.errno == 1062) {
            res.status(400).json("Service Exists");
          } else {
            res.status(400).json("Bad request");
          }
        } else {
          res.status(200).json("Service Added");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.json("Something Didn't go right");
  }
});

router.put("/editService/:id", async (req, res) => {
  try {
    const Sid = req.params.id;
    const images = req.body.images;
    // const Sname = req.body.prod_price;
    // const description = req.body.prod_image;

    if (Sid == "" || Sid == null || images == "" || images == null) {
      res.status(401).json("Bad request");
    } else {
      db.query(`select * from Services where Sid =${Sid}`, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went Wrong");
        } else {
          if (result < 1) {
            res.status(400).json("Invalid Request");
          } else {
            db.query(
              "update Services set images=? where Sid = ?",
              [images, Sid],
              (err) => {
                if (err) {
                  console.log(err);
                  res.status(400).json("Update Failed");
                } else {
                  res.status(200).json("Order updated");
                }
              }
            );
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('"Something went wrong"');
  }
});

router.get("/viewSP/:id", async (req, res) => {
  const SPid = req.params.id;
  if (SPid == null || SPid == "") {
    res.status(400).json("Bad Request");
  } else {
    db.query(
      `select SPname,email,contact,SPtype,SPdescription,location from ServiceProvider where SPid=${SPid}`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (result < 1) {
            res.status(401).json({ message: "Invalid Request" });
          } else {
            res.status(200).json(result);
          }
        }
      }
    );
  }
});

router.put("/approveSP/:id", async (req, res) => {
  const Spid = req.params.id;
  if (Spid == null || Spid == "") {
    res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProvider set Approve =1 where SPid=${Spid}`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            // console.log(result);
            res.status(200).json("Service Provider Approved");
          }
        }
      }
    );
  }
});

router.put("/diapproveSP/:id", async (req, res) => {
  const Spid = req.params.id;
  if (Spid == null || Spid == "") {
    res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProvider set Approve =0 where SPid=${Spid}`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            // console.log(result);
            res.status(200).json("Service Provider Disapproved");
          }
        }
      }
    );
  }
});

router.delete("deleteService", async (req, res) => {});

module.exports = router;
