const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const { verify_email, login_method_SP } = require("./methods");
const bcrypt = require("bcryptjs");
const fs = require("fs");

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
          if (err) {
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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  login_method_SP(email, password, res);
});

router.post("/uploadLogo/:id", async (req, res) => {
  try {
    const SPid = req.params.id;
    const { lgName, base64Lg } = req.body;
    if (lgName == null || lgName == "" || base64Lg == null || base64Lg == "") {
      res.status(400).json({ message: "bad request" });
    } else {
      const data = base64Lg.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(data, "base64");
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
      const data = base64Img.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(data, "base64");
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

router.put("/update", async (req, res) => {});
router.get("/phoneListUser", async (req, res) => {});

module.exports = router;
