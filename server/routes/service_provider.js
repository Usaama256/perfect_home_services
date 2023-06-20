const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const { verify_email, loginMtdSP } = require("./methods");
const bcrypt = require("bcryptjs");
const fs = require("fs");

//API for registering the the service provider
router.post("/signup", async (req, res) => {
  try {
    const {
      email,
      SPname,
      SPtype,
      password,
      contact,
      SPdescription,
      location,
    } = req.body;
    if (
      email == null ||
      email == "" ||
      SPname == null ||
      SPname == "" ||
      SPtype == null ||
      SPtype == "" ||
      contact == null ||
      contact == "" ||
      location == null ||
      location == ""
    ) {
      res.status(400).json({ message: "Bad Request" });
    } else {
      if (verify_email(email)) {
        //encrypting the password into string of and numbers using hash method,
        const hash = await bcrypt.hash(password, 10);
        const new_SP = {
          SPname,
          email,
          contact,
          SPtype,
          desc,
          location,
          hash,
        };
        db.query("insert into ServiceProvider set?", new_SP, (err) => {
          if ((err, result)) {
            console.log(err);
            if (err.errno == 1062) {
              res
                .status(400)
                .json({ message: "Service Provider already exists" });
            } else {
              res.status(400).json({ message: "Bad request" });
            }
          } else {
            res.status(200).json({ message: " Registerd Successfully" });
          }
        });
      } else {
        res.status(400).json({ message: "Invalid Request" });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

//API for sign in the the service provider
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  loginMtdSP(email, password, res);
});

//Adding product
router.post("/addPdt/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const { name, price, desc, images, currency } = req.body;
  if (req.params.SPid.length <= 0) {
    return res.status(400).json("Bad Request");
  } else {
    const newPdt = { name, price, desc, images, currency, SPid };
    db.query(
      `insert into SpProducts set? where SPid='${SPid}'`,
      newPdt,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Something went wrong");
        } else {
          return res.status(200).json("Success");
        }
      }
    );
  }
});

//Fetching all product
router.get("/getPdts/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (req.params.SPid.length <= 0) {
    return res.status(400).json("Bad Request");
  } else {
    db.query(`select * from SpProducts where SPid='${SPid}'`, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Something went wrong");
      } else {
        return res.status(200).json(result);
      }
    });
  }
});

//Update product
router.post("/addPdt/:SPid/:Pid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const Pid = parseInt(req.params.Pid, 10);
  const { name, price, desc, images, currency } = req.body;

  if (req.params.SPid.length <= 0) {
    return res.status(400).json("Bad Request");
  } else {
    const newPdt = { name, price, desc, images, currency };
    db.query(
      `update SpProducts set? where SPid='${SPid}' and id=${Pid}`,
      newPdt,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Something went wrong");
        } else {
          return res.status(200).json("Success");
        }
      }
    );
  }
});

//API for uploading a logo
router.post("/uploadLogo/:id", async (req, res) => {
  try {
    const SPid = req.params.id;
    const base64Lg = req.body.base64Img;
    if (base64Lg == null || base64Lg == "") {
      res.status(400).json({ message: "Bad request" });
    } else {
      //replacing the first string characters of a base64image with an empty string
      const data = base64Lg.replace(/^data:image\/\w+;base64,/, "");
      //converting the data string into base64
      const buffer = Buffer.from(data, "base64");
      //generate the extension of the image logo
      const ext = base64Lg.substring(
        "data:image/".length,
        base64Lg.indexOf(";base64")
      );
      //creating the name of a file
      var fName = `logo_${SPid}.${ext}`;
      fs.writeFile(`./images/SPlogo/${fName}`, buffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          const lgData = { fName, base64Lg, SPid };
          db.query("insert into logos set ?", lgData, (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something Went Wrong");
            } else {
              res.status(200).json(result);
              // { message: "Success" }
            }
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});

//API for uploading a image
router.post("/uploadImage/:id", async (req, res) => {
  try {
    const SPid = req.params.id;
    const base64Img = req.body.base64Img;
    if (base64Img == null || base64Img == "") {
      res.status(400).json({ message: "Bad request" });
    } else {
      // console.log(imageData);
      //replacing the first string characters of a base64image with an empty string
      const data = base64Img.replace(/^data:image\/\w+;base64,/, "");
      //converting the data string into base64
      const buffer = Buffer.from(data, "base64");
      //generate the extension of the image
      const ext = base64Img.substring(
        "data:image/".length,
        base64Img.indexOf(";base64")
      );
      const fName = `img_${SPid}.${ext}`;
      fs.writeFile(`./images/SPImages/${fName}`, buffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          const imgData = { fName, base64Img, SPid };
          db.query("insert into images set ?", [imgData], (err) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something Went Wrong");
            } else {
              res.status(200).json({ message: "Image Added" });
            }
          });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});

//API for updating information of the service provider
router.put("/updateSP/:id", async (req, res) => {
  try {
    const SPid = req.params.id;
    const { contact, location, desc } = req.body;
    db.query(
      `select * from ServiceProvider where SPid =${SPid}`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went Wrong");
        } else {
          if (result < 1) {
            res.status(400).json("Invalid Request");
          } else {
            db.query(
              `update ServiceProvider set contact = "${contact}", location="${location}", SPdescription = "${SPdescription}" where SPid="${SPid}"`,
              (err) => {
                if (err) {
                  console.log(err);
                  res.status(400).json("Failed");
                } else {
                  res.status(200).json("Update Successful");
                }
              }
            );
          }
        }
      }
    );
  } catch (e) {
    console.log(error);
    res.status(500).json('"Something went wrong"');
  }
});

//API for viewing users who checked/contacted a single service provider
router.get("/userContacted", async (req, res) => {
  db.query(
    "select Uid,type from SPContactAttempt where status=1",
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
    }
  );
});

//API for rating the service provider
router.post("/rateSP/:id/:rateValue", async (req, res) => {
  const reviewNo = req.body.reviewNo;
  const Spid = req.params.id;
  const rateValue = parseInt(req.params.rateValue);
  if (reviewNo == null || reviewNo == "") {
    return res.status(400).json("Bad request");
  } else {
    db.query(
      `insert into Ratings set SPid="${Spid}",rateValue="${rateValue}",reviewsNo="${reviewNo}"`,
      (err) => {
        if (err) {
          console.log(err);
          res.status(400).json("Something Went wrong");
        } else {
          res.status(200).json("Success");
        }
      }
    );
  }
});

//API for ratings increment
router.put("/ratingRise/:id/:rateValue", async (req, res) => {
  try {
    const Spid = req.params.id;
    const rateV = parseInt(req.params.rateValue);
    if (Spid == null || Spid == "" || rateV == null || rateV == "") {
      res.status(400).json("Bad request");
    } else {
      db.query("select reviewsNo,rateValue from Ratings", (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("something went wrong");
        } else {
          //rate value from the database
          const dbValue = parseInt(result[0].rateValue);
          const avgRate = Number((dbValue + rateV) / 2);
          const reviewNo = parseInt(result[0].reviewsNo) + 1;
          db.query(
            `update Ratings set rateValue="${avgRate}",reviewsNo="${reviewNo}" where SPid="${Spid}"`,
            (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).json("something went wrong");
              } else {
                if (result.affectedRows == 0) {
                  res.status(400).json("Invalid Request");
                } else {
                  res.status(200).json(result);
                }
              }
            }
          );
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//API for retrieving the comments about the service provider from the database
router.get("/viewReviews/:id", async (req, res) => {
  try {
    const Spid = req.params.id;
    if (Spid == null || Spid == "") {
      res.status(400).json("Bad request");
    } else {
      db.query(`select * from Review where SPid="${Spid}"`, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          res.status(200).json(results);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
