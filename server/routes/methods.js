const bcrypt = require("bcryptjs");
const fs = require("fs");
const db = require("../db/db_man");

//Sign in method for the client ==== Email
const loginMtdUserEmail = (email, password, res) => {
  if (email.length < 1 || password.length < 1) {
    res.status(400).json("Bad Request");
  } else {
    if (verify_email(email)) {
      db.query(
        `select Uid, username, email, phone, location, profilePic, hash from Users where email='${email}'`,
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
          } else {
            //check whether client exists
            if (result.length < 1) {
              res.status(400).json("Invalid Request");
            } else {
              // comapring the stored password in the database whether its matching with the password used to login
              const isVerified = await bcrypt.compare(password, result[0].hash);
              //   console.log(isVerified);
              if (isVerified) {
                res.status(200).json({
                  Uid: result[0].Uid,
                  email: result[0].email,
                  username: result[0].username,
                  phone: result[0].phone,
                  location: result[0].location,
                  profilePic: result[0].profilePic,
                });
              } else {
                res.status(400).json("Wrong Credentials");
              }
            }
          }
        }
      );
    } else {
      res.status(400).json("Bad Request");
    }
  }
};

//Sign in method for the client ==== Phone Number
const loginMtdUserTel = (tel, password, res) => {
  if (tel.length < 1 || password.length < 1) {
    res.status(400).json("Bad Request");
  } else {
    db.query(
      `select Uid, username, email, phone, location, profilePic from Users where phone='${tel}'`,
      async (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something went wrong");
        } else {
          //check whether client exists
          if (result.length < 1) {
            res.status(400).json("Invalid Request");
          } else {
            //comapring the stored password in the database whether its matching with the password used to login
            const isVerified = await bcrypt.compare(password, result[0].hash);
            //   console.log(isVerified);
            if (isVerified) {
              res.status(200).json({
                Uid: result[0].Uid,
                email: result[0].email,
                username: result[0].username,
                phone: result[0].phone,
                location: result[0].location,
                profilePic: result[0].profilePic,
              });
            } else {
              res.status(400).json("Wrong Credentials");
            }
          }
        }
      }
    );
  }
};

//Sign in method for the service provider
const loginMtdSP = (email, password, res) => {
  if (email == null || email == "" || password == null || password == "") {
    res.status(400).json("Bad Request 1");
  } else {
    if (verify_email(email)) {
      db.query(
        `select SPid, SPname, email, contact, location, logoImg, hash, description, status, approved, rateValue, reviewsNo, Sid, Sname from ServiceProviders join Services using (Sid) join Ratings using (SPid) where email='${email}'`,
        async (err, SP) => {
          if (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
          } else {
            //checking whether admin exists
            if (SP.length < 1) {
              console.log(SP);
              res.status(400).json("Bad Request 2");
            } else {
              //comapring the stored password in the database whether its matching with the password used to login
              const isVerified = await bcrypt.compare(password, SP[0].hash);
              //   console.log(isVerified);
              if (isVerified) {
                db.query(
                  `select * from SPOwners where SPid='${SP[0].SPid}'`,
                  (err, SPOwner) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json("Something went wrong");
                    } else {
                      res.status(200).json({
                        id: SP[0].SPid,
                        email: SP[0].email,
                        title: SP[0].SPname,
                        tel: SP[0].contact,
                        location: SP[0].location,
                        desc: SP[0].description,
                        logo: SP[0].logoImg,
                        status: SP[0].status,
                        approved: SP[0].approved,
                        Sid: SP[0].Sid,
                        Sname: SP[0].Sname,
                        rating: {
                          value: SP[0].rateValue,
                          reviews: SP[0].reviewsNo,
                        },

                        owner: {
                          SPid: SP[0].SPid,
                          OwnerId: SPOwner[0].OwnerId,
                          position: SPOwner[0].position,
                          firstName: SPOwner[0].firstName,
                          lastName: SPOwner[0].lastName,
                          location: SPOwner[0].location,
                          email: SPOwner[0].email,
                          tel: SPOwner[0].contact,
                          desc: SPOwner[0].desc,
                          avator: SPOwner[0].profilePic,
                        },
                      });
                    }
                  }
                );
              } else {
                res.status(400).json("Wrong  Credentials");
              }
            }
          }
        }
      );
    } else {
      res.status(400).json("Bad Request 3");
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
            res.status(500).json("Something went wrong");
          } else {
            //checking whether admin exists
            if (result.length < 1) {
              res.status(400).json("Bad Request");
            } else {
              //comapring the stored password in the database whether its matching with the password used to login
              const isVerified = await bcrypt.compare(password, result[0].hash);
              if (isVerified) {
                const { hash, createdAt, updatedAt, ...rest } = result[0];
                res.status(200).json(rest);
              } else {
                res.status(400).json("Wrong  Credentials");
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

//Fetch SP Products
const fetchSPpdts = (SPid, res) => {
  db.query(
    `select * from SpProducts where SPid='${SPid}' order by id desc`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Something went wrong");
      } else {
        const filtered = result.map((i, n) => {
          return { ...i, images: JSON.parse(i.images) };
        });
        return res.status(200).json(filtered);
      }
    }
  );
};

//Fetch Single SP by admin
const fetchSP = (SPid, res) => {
  db.query(
    `select SPid, SPname, email, contact, location, logoImg, description, status, approved, rateValue, reviewsNo, ServiceProviders.createdAt, ServiceProviders.updatedAt, Sid, Sname from ServiceProviders join Services using (Sid) join Ratings using (SPid) where SPid='${SPid}'`,
    (err, SP) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
      } else {
        db.query(
          `select * from SPOwners where SPid='${SPid}'`,
          (err, SPOwner) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something went wrong");
            } else {
              res.status(200).json({
                SPid: SP[0].SPid,
                email: SP[0].email,
                title: SP[0].SPname,
                tel: SP[0].contact,
                location: SP[0].location,
                desc: SP[0].description,
                logo: SP[0].logoImg,
                status: SP[0].status,
                approved: SP[0].approved,
                Sid: SP[0].Sid,
                Sname: SP[0].Sname,
                rating: { value: SP[0].rateValue, reviews: SP[0].reviewsNo },
                owner: {
                  SPid: SP[0].SPid,
                  OwnerId: SPOwner[0].OwnerId,
                  position: SPOwner[0].position,
                  firstName: SPOwner[0].firstName,
                  lastName: SPOwner[0].lastName,
                  location: SPOwner[0].location,
                  email: SPOwner[0].email,
                  tel: SPOwner[0].contact,
                  desc: SPOwner[0].desc,
                  avator: SPOwner[0].profilePic,
                },
              });
            }
          }
        );
      }
    }
  );
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

//Uploading photo
const uploadImage = async (base64Img, imgName, folderName) => {
  //replacing the first string characters of a base64image with an empty string
  const data = base64Img.replace(/^data:image\/\w+;base64,/, "");
  //converting the data string into base64
  const buffer = Buffer.from(data, "base64");
  //generate the extension of the image
  const ext = base64Img.substring(
    "data:image/".length,
    base64Img.indexOf(";base64")
  );
  const fName = `${imgName}.${ext}`;

  return new Promise((resolve, reject) => {
    fs.writeFile(`./images/${folderName}/${fName}`, buffer, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(fName);
      }
    });
  });
};

module.exports = {
  uploadImage,
  verify_email,
  loginMtdUserEmail,
  loginMtdUserTel,
  loginMtdSP,
  loginMtdAdmin,
  fetchSPpdts,
  fetchSP,
};
