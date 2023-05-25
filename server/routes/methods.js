const bcrypt = require("bcryptjs");
const db = require("../db/db_man");

//Sign in method for the client
const loginMtdUser = (email, password, res) => {
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
            //check whether client exists
            if (result.length < 1) {
              res.status(400).json({ message: "User Doesn't Exist" });
            } else {
              //comapring the stored password in the database whether its matching with the password used to login
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

//Sign in method for the service provider
const loginMtdSP = (email, password, res) => {
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
            //checking whether admin exists
            if (result.length < 1) {
              res
                .status(400)
                .json({ message: "ServiceProvider Doesn't Exist" });
            } else {
              //comapring the stored password in the database whether its matching with the password used to login
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

//Sign in method for the admin
const loginMtdAdmin = (email, password, res) => {
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
            //checking whether admin exists
            if (result.length < 1) {
              res.status(400).json({ message: "Admin Doesn't Exist" });
            } else {
              //comapring the stored password in the database whether its matching with the password used to login
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

//method for verifying the correct syntax of email
const verify_email = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  verify_email,
  loginMtdUser,
  loginMtdSP,
  loginMtdAdmin,
};
