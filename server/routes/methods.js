const bcrypt = require("bcryptjs");
const db = require("../db/db_man");
// const uuid = require("uuid");
// const mime = require("mime-types");
// const { error } = require("console");

const login_method_user = (email, password, res) => {
  if (email == null || email == "" || password == null || password == "") {
    res.status(400).json("Bad Request");
  } else {
    if (verify_email(email)) {
      db.query(
        `select * from Users where email='${email}'`,
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          } else {
            if (result.length < 1) {
              res.status(400).json({ message: "User Doesn't Exist" });
            } else {
              const isVerified = await bcrypt.compare(password, result[0].hash);
              //   console.log(isVerified);
              if (isVerified) {
                res.status(200).json({
                  id: result[0].Uid,
                  email: result[0].email,
                  username: result[0].username,
                  phone: result[0].phone,
                  location: result[0].location,
                });
              } else {
                res.status(400).json({ message: "Wrong User Credentials" });
              }
            }
          }
        }
      );
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  }
};

const login_method_SP = (email, password, res) => {
  if (email == null || email == "" || password == null || password == "") {
    res.status(400).json("Bad Request");
  } else {
    if (verify_email(email)) {
      db.query(
        `select * from ServiceProvider where email='${email}'`,
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          } else {
            if (result.length < 1) {
              res
                .status(400)
                .json({ message: "ServiceProvider Doesn't Exist" });
            } else {
              const isVerified = await bcrypt.compare(password, result[0].hash);
              //   console.log(isVerified);
              if (isVerified) {
                res.status(200).json({
                  id: result[0].SPid,
                  email: result[0].email,
                  username: result[0].SPname,
                  phone: result[0].contact,
                  location: result[0].location,
                  description: result[0].SPdescription,
                });
              } else {
                res.status(400).json({ message: "Wrong  Credentials" });
              }
            }
          }
        }
      );
    } else {
      res.status(400).json({ message: "Invalid Request" });
    }
  }
};

const login_method_admin = (email, password, res) => {
  if (email == null || email == "" || password == null || password == "") {
    res.status(400).json("Bad Request");
  } else {
    if (verify_email(email)) {
      db.query(
        `select * from Admin where email='${email}'`,
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          } else {
            if (result.length < 1) {
              res.status(400).json({ message: "Admin Doesn't Exist" });
            } else {
              const isVerified = await bcrypt.compare(password, result[0].hash);
              if (isVerified) {
                res.status(200).json({
                  id: result[0].Aid,
                  email: result[0].email,
                  username: result[0].Username,
                  phone: result[0].phone,
                });
              } else {
                res.status(400).json({ message: "Wrong  Credentials" });
              }
            }
          }
        }
      );
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  }
};

const verify_email = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
};

// const uploadImage = async (req, res) => {
//   try {
//     const imgData = ({ type, data } = req.body.base64Image);
//     // .match(
//     //   /^data:([A-Za-z-+\/]+);base64,(.+)$/
//     // );
//     // const response = {};
//     // if (image.length !== 3) {
//     // return Error("Invalid request");
//     // } else {
//     // response.type = image[1];
//     // var buffer = Buffer.from(image[2], "base64");
//     var imgData = image.replace(/^data:image\/\w+;base64,/, "");
//     var buffer = Buffer.from(imgData, "base64");
//     // var buffer = Buffer.from(data, "base64");
//     // var type = response.type;
//     // var extension = mime.extension(type);
//     let filename = "plumbing." + extension;
//     fs.writeFile("./images/" + filename, buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(buffer);
//         res.status(200).json({ message: "Success" });
//       }
//     });
//     // }
//   } catch (e) {
//     console.log(e);
//   }
// };

module.exports = {
  verify_email,
  login_method_user,
  login_method_SP,
  login_method_admin,
};
