const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();
const {
  verify_email,
  uploadImage,
  loginMtdUserEmail,
  loginMtdUserTel,
} = require("./methods");

//API for registering the client
router.post("/signup", async (req, res) => {
  const { email, pass, phone, location, profilePic } = req.body;
  if (email.length < 1 || phone.length < 1 || location.length < 1) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    if (verify_email(email)) {
      const hash = await bcrypt.hash(pass, 10);
      if (profilePic.length > 0) {
        uploadImage(profilePic, phone, "users")
          .then((result) => {
            const profilePic = `http://localhost:5427/images/users/${result}`;
            const new_user = {
              username: email.split("@")[0],
              email,
              phone,
              location,
              hash,
              profilePic,
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
                loginMtdUserEmail(email, pass, res);
              }
            });
          })
          .catch((err) => {
            console.log(err);
            const new_user = {
              username: email.split("@")[0],
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
                db.query(
                  `select Uid, username, email, phone, location, profilePic from Users where email='${email}'`,
                  async (err, usr) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json("Something went wrong");
                    } else {
                      //check whether client exists
                      if (usr.length < 1) {
                        res.status(400).json("Invalid Request");
                      } else {
                        res.status(200).json({
                          Uid: usr[0].Uid,
                          email: usr[0].email,
                          username: usr[0].username,
                          phone: usr[0].phone,
                          location: usr[0].location,
                          profilePic: usr[0].profilePic,
                        });
                      }
                    }
                  }
                );
              }
            });
          });
      } else {
        const new_user = {
          username: email.split("@")[0],
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
            db.query(
              `select Uid, username, email, phone, location, profilePic from Users where email='${email}'`,
              async (err, usr) => {
                if (err) {
                  console.log(err);
                  res.status(500).json("Something went wrong");
                } else {
                  //check whether client exists
                  if (usr.length < 1) {
                    res.status(400).json("Invalid Request");
                  } else {
                    res.status(200).json({
                      Uid: usr[0].Uid,
                      email: usr[0].email,
                      username: usr[0].username,
                      phone: usr[0].phone,
                      location: usr[0].location,
                      profilePic: usr[0].profilePic,
                    });
                  }
                }
              }
            );
          }
        });
      }
    } else {
      res.status(400).json("Bad Request");
    }
  }
});

//API to sign in the client
router.post("/login/:type", async (req, res) => {
  const type = req.params.type;
  const { email, tel, pass } = req.body;
  if (type == "email") {
    loginMtdUserEmail(email, pass, res);
  } else if (type == "tel") {
    loginMtdUserTel(tel, pass, res);
  } else {
    res.status(400).json("Bad Request");
  }
});

//API for viewing services
router.get("/fetchServices", async (req, res) => {
  db.query("select * from Services where active='1'", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      // { id: "S31QsB", name: "Electrical Services", desc: "", imgs: [] }
      const filtered = result.map((i, n) => {
        return {
          id: i.Sid,
          name: i.Sname,
          desc: "",
          imgs: JSON.parse(i.imgs),
          // imgs: i.images,
        };
      });
      res.status(200).json(filtered);
    }
  });
});

//API for user Viewing  all service providers
router.get("/fetchSPs", async (req, res) => {
  db.query(
    "select SPid, SPname, email, contact, logoImg, description, status, Approved, location, reviewsNo, rateValue, Sid  from ServiceProviders join Ratings using (SPid) where status='active' and approved='1';",
    (err, sps) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
      } else {
        if (sps.length <= 0) {
          res.status(404).json("No records Found");
        } else {
          const filtered = [];
          sps.forEach(async (i, n) => {
            db.query(
              `select * from SpProducts where SPid=${i.SPid};`,
              (err, pdts) => {
                if (err) {
                  console.log(err);
                  res.status(500).json("Something went wrong");
                } else {
                  const filteredPdts = pdts.map((i, n) => {
                    return {
                      ...i,
                      images: JSON.parse(i.images),
                    };
                  });
                  const sp = {
                    id: i.SPid,
                    desc: i.description,
                    title: i.SPname,
                    sId: i.Sid,
                    location: i.location,
                    logo: i.logoImg,
                    email: [i.email],
                    tel: [i.contact],
                    rating: { value: i.rateValue, reviews: i.reviewsNo },
                    pricing: filteredPdts,
                  };
                  filtered.push(sp);

                  if (filtered.length == sps.length) {
                    return res.status(200).json(filtered);
                  }
                }
              }
            );
          });
        }
      }
    }
  );
});

//API for ratings service provider
router.post("/rateSp/:SPid/:Rvalue", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    const rateV = parseInt(req.params.Rvalue, 10);
    if (`${SPid}`.length == 0 || `${rateV}`.length == 0) {
      res.status(400).json("Bad request");
    } else {
      db.query(
        `select reviewsNo, rateValue from Ratings where SPid='${SPid}';`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json("something went wrong");
          } else {
            const newRating = (parseInt(result[0].rateValue, 10) + rateV) / 2;
            const newReviewsNo = parseInt(result[0].reviewsNo) + 1;
            db.query(
              `update Ratings set rateValue='${newRating}', reviewsNo='${newReviewsNo}' where SPid='${SPid}'`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json("something went wrong");
                } else {
                  if (result.affectedRows == 0) {
                    res.status(400).json("Invalid Request");
                  } else {
                    db.query(
                      `select reviewsNo, rateValue from Ratings where SPid='${SPid}';`,
                      async (err, result) => {
                        if (err) {
                          console.log(err);
                          res.status(500).json("Something Went wrong");
                        } else {
                          res.status(200).json({
                            value: result[0].rateValue,
                            reviews: result[0].reviewsNo,
                          });
                        }
                      }
                    );
                  }
                }
              }
            );
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
});

//Fetching Service provider ratings
router.get("/getsprate/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  db.query(
    `select reviewsNo, rateValue from Ratings where SPid='${SPid}';`,
    async (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something Went wrong");
      } else {
        res
          .status(200)
          .json({ value: result[0].rateValue, reviews: result[0].reviewsNo });
      }
    }
  );
});

//API for sending comments/reviews about the selected service provider
router.post("/commentOnsp/:Uid/:SPid", async (req, res) => {
  try {
    const Uid = parseInt(req.params.Uid, 10);
    const SPid = parseInt(req.params.SPid, 10);
    const { comment } = req.body;
    if (SPid == null || SPid == "" || comment.length < 6) {
      res.status(400).json("Bad request");
    } else {
      const newComment = { Uid, SPid, comment };
      db.query(`insert into SpUserComments set?`, newComment, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          res.status(200).json("Success");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//API for retrieving the comments about the service provider from users \/
router.get("/fetchSpComments/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    db.query(
      `select Cid, Uid, comment, username, profilePic, SpUserComments.createdAt from SpUserComments join Users using (Uid) where SPid='${SPid}' and status='1' order by Cid desc;`,
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          res.status(200).json(results);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//API for user to delete comment \/
router.get("/userDeleteComment/:Cid/:Uid/:SPid", async (req, res) => {
  try {
    const Uid = parseInt(req.params.Uid, 10);
    const Cid = parseInt(req.params.Cid, 10);
    const SPid = parseInt(req.params.SPid, 10);
    db.query(
      `update SpUserComments set status='0' where Cid='${Cid}' and SPid='${SPid}' and Uid='${Uid}';`,
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          db.query(
            `select Cid, Uid, comment, username, profilePic, SpUserComments.createdAt from SpUserComments join Users using (Uid) where SPid='${SPid}' and status='1' order by Cid desc;`,
            (err, results) => {
              if (err) {
                console.log(err);
                res.status(500).json("Something Went wrong");
              } else {
                res.status(200).json(results);
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

//API for making a call attempt \/
router.post("/contactAttempt/:Uid/:SPid", async (req, res) => {
  const Uid = parseInt(req.params.Uid, 10);
  const SPid = parseInt(req.params.SPid, 10);
  const { type, time } = req.body;
  if (type == "email") {
    const newItem = { Uid, SPid, type };
    db.query(`insert into SPContactAttempt set?`, newItem, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json("Something went wrong");
      } else {
        res.status(200).json("Success");
      }
    });
  } else {
    if (type == "tel") {
      const newItem = { Uid, SPid, type, time };
      db.query(`insert into SPContactAttempt set?`, newItem, (error) => {
        if (error) {
          console.log(error);
          res.status(500).json("Something went wrong");
        } else {
          res.status(200).json("Success");
        }
      });
    } else {
      res.status(400).json("Bad request");
    }
  }
});

//API for viewing a single service provider the client
// router.get("/fetchSP/:id", async (req, res) => {
//   const id = req.params.id;
//   if (id == null || id == "") {
//     res.status(400).json("Bad Request");
//   } else {
//     db.query(
//       `select SPname,email,contact,SPtype,SPdescription,location from ServiceProviders where SPid=${id}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           if (result < 1) {
//             res.status(401).json({ message: "Service Provider Doesnt Exist" });
//           } else {
//             res.status(200).json(result);
//           }
//         }
//       }
//     );
//   }
// });

//API to call when the user forgets their password
// router.post("/forgotPassword/:email", async (req, res) => {
//   try {
//     const email = req.params.email;
//     if (email == null || email == "") {
//       res.status(400).json("Bad request");
//     } else {
//       db.query(
//         `select email,hash from Users where email="${email}"`,
//         (error, result) => {
//           if (error) {
//             console.log(error);
//             res.status(500).json("Something went wrong");
//           } else {
//             if (result <= 0) {
//               //here we send a sucess status to protect the data from being analyzed by unauthorized users
//               res.status(200).json("Password reset link sent to your email");
//             } else {
//               //if email exits, generate a reset token
//               const resetToken = crypto.randomBytes(40).toString("hex");
//               const resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000);
//               const expiredAt = resetTokenExpires;

//               const transporter = nodemailer.createTransport({
//                 host: "smtp.ethereal.email",
//                 port: 587,
//                 secure: true,
//                 auth: {
//                   user: process.env.USER, // generated ethereal user
//                   pass: process.env.PASS, // generated ethereal password
//                 },
//               });
//               const message = {
//                 from: process.env.EMAIL_FROM,
//                 to: process.env.USER,
//                 subject: "Reset Password",
//                 text: `To reset your password, click on the following`,
//               };
//               transporter.sendMail(message, (err, info) => {
//                 if (err) {
//                   console.log(err);
//                   res.status(500).json("Some went wrong");
//                 } else {
//                   res.status(200).json("link sent to your email");
//                   console.log("Message sent: %s", info.messageId);
//                 }
//               });
//               //if email exists generate a password reset token and it to the database

//               // db.query(
//               //   "insert into resetPassword (email,reset_token,expiresAt) values (?,?,?)",
//               //   [email, resetToken, expiredAt],
//               //   (error) => {
//               //     if (error) {
//               //       console.log(error);
//               //       res.status(500).json("Something went Wrong");
//               //     } else {
//               //     }
//               //   }
//               // );
//             }
//           }
//         }
//       );
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
