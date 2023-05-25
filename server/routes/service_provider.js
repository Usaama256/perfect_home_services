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
          SPdescription,
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

//API for uploading a logo
router.post("/uploadLogo/:id", async (req, res) => {
  try {
    const SPid = req.params.id;
    const { lgName, base64Lg } = req.body;
    if (lgName == null || lgName == "" || base64Lg == null || base64Lg == "") {
      res.status(400).json({ message: "bad request" });
    } else {
      //replacing the first string characters of a base64image with an empty string
      const data = base64Lg.replace(/^data:image\/\w+;base64,/, "");
      //converting the data string into base64
      const buffer = Buffer.from(data, "base64");
      //generate the extension of the logo
      const ext = base64Lg.substring(
        "data:image/".length,
        base64Lg.indexOf(";base64")
      );
      const fName = `logo_${SPid}.${ext}`;
      fs.writeFile(`./images/SPlogo/${fName}`, buffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          const lgData = { lgName, base64Lg, SPid };
          db.query("insert into logos set ?", lgData, (err) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something Went Wrong");
            } else {
              res.status(200).json({ message: "Success" });
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
    const { imgName, base64Img } = req.body;
    if (
      imgName == null ||
      imgName == "" ||
      base64Img == null ||
      base64Img == ""
    ) {
      res.status(400).json({ message: "bad request" });
    } else {
      // console.log(imageData);
      //replacing the first string characters of a base64image with an empty string
      const data = base64Img.replace(/^data:image\/\w+;base64,/, "");
      //converting the data string into base64
      const buffer = Buffer.from(data, "base64");
      //generate the extension of the image
      const ext = base64Img.substring(
        "data:image/".length,
        imgType.indexOf(";base64")
      );
      const fName = `img_${SPid}.${ext}`;
      fs.writeFile(`./images/SPImages/${fName}`, buffer, (err) => {
        if (err) {
          console.log(err);
        } else {
          const imgData = { imgName, base64Img, SPid };
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
    const { contact, location, SPdescription } = req.body;
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
              (err, result) => {
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

//API for viewing the contact list of users who checked a single service provider
router.get("/phoneListUser", async (req, res) => {
  db.query("select phone from Users", (err, result) => {
    if (err) {
      res.status(500).json("Something Went wrong");
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
