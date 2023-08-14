const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const {
  verify_email,
  loginMtdSP,
  uploadImage,
  fetchSPpdts,
} = require("./methods");
const bcrypt = require("bcryptjs");
const fs = require("fs");

//API for registering the the service provider \/
router.post("/signup", async (req, res) => {
  try {
    const { email, title, tel, location, desc, Sid, pass, logo, owner } =
      req.body;

    if (verify_email(email)) {
      //encrypting the password into string of and numbers using hash method,
      const hash = await bcrypt.hash(pass, 10);
      const newSP = {
        email,
        SPname: title,
        contact: tel,
        location,
        description: desc,
        // logoImg: logo,
        Sid,
        hash,
      };
      db.query("insert into ServiceProviders set?", newSP, (err, result) => {
        if (err) {
          console.log(err);
          if (err.errno == 1062) {
            res.status(400).json("Service Provider already exists");
          } else {
            res.status(400).json("Bad request");
          }
        } else {
          db.query(
            `select SPid from ServiceProviders where hash='${hash}'`,
            (err, result) => {
              if (err) {
                console.log(err);
                res
                  .status(500)
                  .json("Something went wrong: Registration Failed");
                db.query(
                  `delete from ServiceProviders where hash='${hash}'`,
                  (err) => err && console.log(err)
                );
              } else {
                const SPid = parseInt(result[0].SPid, 10);
                const newOwner = {
                  SPid,
                  position: owner.position,
                  firstName: owner.firstName,
                  lastName: owner.lastName,
                  location: owner.location,
                  email: owner.email,
                  contact: owner.tel,
                  desc: owner.desc,
                  // profilePic: owner.avator,
                };
                db.query(
                  `insert into SPOwners set?`,
                  newOwner,
                  (err, result) => {
                    if (err) {
                      console.log(err);
                      res
                        .status(500)
                        .json("Something went wrong: Registration Failed");
                      db.query(
                        `delete from ServiceProviders where hash='${hash}'`,
                        (err) => err && console.log(err)
                      );
                    } else {
                      const ratingTb = {
                        SPid,
                        reviewsNo: 0,
                        rateValue: 0,
                      };
                      db.query(`insert into Ratings set?`, ratingTb);
                      //Uploaging SP logo
                      if (logo.length > 11) {
                        const fName = `${title.replace(/ /g, "-")}_logo`;
                        uploadImage(logo, fName, "SPlogo")
                          .then((name) => {
                            const logoImg = `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPlogo/${name}`;
                            db.query(
                              `update ServiceProviders set logoImg='${logoImg}' where hash='${hash}'`,
                              (err) => {
                                if (err) {
                                  console.log(err);
                                  //Uploaging SP Profile pic
                                  if (owner.avator.length > 11) {
                                    const fName = `${title.replace(
                                      / /g,
                                      "-"
                                    )}_owner`;
                                    uploadImage(owner.avator, fName, "SPlogo")
                                      .then((name) => {
                                        const profilePic = `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPlogo/${name}`;
                                        db.query(
                                          `update SPOwners set profilePic='${profilePic}' where SPid='${SPid}'`,
                                          (err) => {
                                            if (err) {
                                              console.log(err);
                                              loginMtdSP(email, pass, res);
                                            } else {
                                              loginMtdSP(email, pass, res);
                                            }
                                          }
                                        );
                                      })
                                      .catch((err) => {
                                        console.log(err);
                                        loginMtdSP(email, pass, res);
                                      });
                                  } else {
                                    loginMtdSP(email, pass, res);
                                  }
                                } else {
                                  //Uploaging SP Profile pic
                                  if (owner.avator.length > 11) {
                                    const fName = `${title.replace(
                                      / /g,
                                      "-"
                                    )}_owner`;
                                    uploadImage(owner.avator, fName, "SPlogo")
                                      .then((name) => {
                                        const profilePic = `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPlogo/${name}`;
                                        db.query(
                                          `update SPOwners set profilePic='${profilePic}' where SPid='${SPid}'`,
                                          (err) => {
                                            if (err) {
                                              console.log(err);
                                              loginMtdSP(email, pass, res);
                                            } else {
                                              loginMtdSP(email, pass, res);
                                            }
                                          }
                                        );
                                      })
                                      .catch((err) => {
                                        console.log(err);
                                        loginMtdSP(email, pass, res);
                                      });
                                  } else {
                                    loginMtdSP(email, pass, res);
                                  }
                                }
                              }
                            );
                          })
                          .catch((err) => {
                            console.log(err);
                            loginMtdSP(email, pass, res);
                          });
                      } else {
                        loginMtdSP(email, pass, res);
                      }
                    }
                  }
                );
              }
            }
          );
        }
      });
    } else {
      res.status(400).json("Invalid Request");
    }
  } catch (e) {
    console.log(e);
  }
});

//API for sign in the the service provider \/
router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  loginMtdSP(email, pass, res);
});

//Adding product \/
router.post("/addPdt/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const { name, price, desc, imgsArr, currency } = req.body;
  if (req.params.SPid.length < 1) {
    return res.status(400).json("Bad Request");
  } else {
    if (imgsArr.length > 0) {
      const imgs = [];
      var blankNum = 0;
      imgsArr.forEach((i, n) => {
        const fName = `${name.replace(/ /g, "-")}_${SPid}_${n + 1}`;
        uploadImage(i, fName, "SPImages").then((fNameWithExt) => {
          if (i?.length > 20) {
            console.log("Img Present");
            imgs.push(
              `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPImages/${fNameWithExt}`
            );
            console.log("SP Product image Uploaded");
          } else {
            blankNum += 1;
          }

          if (imgs.length + blankNum == imgsArr.length) {
            const images = JSON.stringify(imgs);
            const newPdt = { name, price, desc, currency, SPid, images };
            db.query(`insert into SpProducts set?`, newPdt, (err, result) => {
              if (err) {
                console.log(err);
                return res.status(500).json("Something went wrong");
              } else {
                fetchSPpdts(SPid, res);
              }
            });
          }
        });
      });
    } else {
      const newPdt = { name, price, desc, currency, SPid };
      db.query(`insert into SpProducts set?`, newPdt, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Something went wrong");
        } else {
          fetchSPpdts(SPid, res);
        }
      });
    }
  }
});

//Fetching all product \/
router.get("/getPdts/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (req.params.SPid.length <= 0) {
    return res.status(400).json("Bad Request");
  } else {
    fetchSPpdts(SPid, res);
  }
});

//Update product \/
router.post("/updatePdt/:SPid/:Pid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const Pid = parseInt(req.params.Pid, 10);
  const { name, price, desc, currency } = req.body;

  if (req.params.SPid.length < 1) {
    return res.status(400).json("Bad Request");
  } else {
    const newPdt = {
      name,
      price,
      desc,
      currency,
    };
    db.query(
      `update SpProducts set? where SPid='${SPid}' and id=${Pid}`,
      newPdt,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Something went wrong");
        } else {
          fetchSPpdts(SPid, res);
        }
      }
    );
  }
});

//delete product \/
router.get("/deletePdt/:SPid/:Pid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const Pid = parseInt(req.params.Pid, 10);

  if (req.params.SPid.length < 1) {
    return res.status(400).json("Bad Request");
  } else {
    db.query(
      `delete from SpProducts where id='${Pid}' and SPid='${SPid}';`,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Something went wrong");
        } else {
          // fetchSPpdts(SPid, res);
          return res.status(200).json("Successfull");
        }
      }
    );
  }
});

//Update product Images \/
router.post("/updatePdtImg/:SPid/:Pid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const Pid = parseInt(req.params.Pid, 10);
  const { name, imagesArr } = req.body;

  if (req.params.SPid.length < 1) {
    return res.status(400).json("Bad Request");
  } else {
    if (imagesArr.length > 0) {
      const imgs = [];
      imagesArr.forEach((i, n) => {
        const fName = `${name.replace(/ /g, "-")}_${SPid}_${n + 1}`;
        uploadImage(i, fName, "SPImages").then((name) => {
          imgs.push(
            `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPImages/${name}`
          );
          console.log("SP Product image Uploaded");
          if (imgs.length == imagesArr.length) {
            const images = JSON.stringify(imgs);
            db.query(
              `update SpProducts set images='${images}' where id='${Pid}'`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json("Something went wrong");
                } else {
                  fetchSPpdts(SPid, res);
                }
              }
            );
          }
        });
      });
    } else {
      res.status(400).json("No Images To Update");
    }
  }
});

//API for viewing users who checked/contacted a single service provider \/
router.get("/userContactAtempts/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  db.query(
    `select Uid, id, type, status, username, email, phone, location, profilePic, time from SPContactAttempt join Users using (Uid) where SPid='${SPid}' order by id desc`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something Went Wrong");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//Update contact attempt status \/
router.get("/contactstatus/:SPid/Uid:/:id", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const Uid = parseInt(req.params.Uid, 10);
  const id = parseInt(req.params.id, 10);
  db.query(
    `update SPContactAttempt set status='1' where id='${id}' and SPid='${SPid}' and Uid='${Uid}';`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something Went Wrong");
      } else {
        db.query(
          `select Uid, id, type, status, username, email, phone, location, profilePic, time from SPContactAttempt join Users using (Uid) where SPid='${SPid}' order by id desc`,
          (err, results) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something Went Wrong");
            } else {
              res.status(200).json(results);
            }
          }
        );
      }
    }
  );
});

//API for retrieving the comments about the service provider from users \/
router.get("/fetchComments/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    db.query(
      `select Uid, comment, username, email, phone, profilePic, status, SpUserComments.createdAt from SpUserComments join Users using (Uid) where SPid='${SPid}' order by Cid desc;`,
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

//API for updating SP logo \/
router.post("/updateLogo/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    const { title, logo } = req.body;
    if (logo.length < 11) {
      res.status(400).json("Bad request");
    } else {
      const fName = `${title.replace(/ /g, "-")}_logo`;
      uploadImage(logo, fName, "SPlogo")
        .then((name) => {
          const logoImg = `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPlogo/${name}`;
          db.query(
            `update ServiceProviders set logoImg='${logoImg}' where SPid='${SPid}'`,
            (err) => {
              if (err) {
                console.log(err);
                res.status(500).json("Something Went Wrong");
              } else {
                res.status(200).json(logoImg);
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json("Something went wrong");
        });
    }
  } catch (e) {
    console.log(e);
  }
});

//API for updating SP Owner Profile pic \/
router.post("/updateProfilePic/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    const { title, avator } = req.body;
    if (avator.length < 11) {
      res.status(400).json("Bad request");
    } else {
      const fName = `${title.replace(/ /g, "-")}_owner`;
      uploadImage(avator, fName, "SPlogo")
        .then((name) => {
          const profilePic = `http://perfect-home-services-lruh4.ondigitalocean.app/images/SPlogo/${name}`;
          db.query(
            `update SPOwners set profilePic='${profilePic}' where SPid='${SPid}'`,
            (err) => {
              if (err) {
                console.log(err);
                res.status(500).json("Something went wrong");
              } else {
                res.status(200).json(profilePic);
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json("Something went wrong");
        });
    }
  } catch (e) {
    console.log(e);
  }
});

//API for updating SP company Info \/
router.post("/updateSpInfo/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    const { email, title, tel, location, desc, Sid } = req.body;
    const newSP = {
      email,
      SPname: title,
      contact: tel,
      location,
      description: desc,
      Sid,
      status: "suspended",
    };
    db.query(
      `update ServiceProviders set? where SPid='${SPid}'`,
      newSP,
      (err) => {
        if (err) {
          console.log(err);
          res.status(400).json("Bad request");
        } else {
          db.query(
            `select SPid, SPname, email, contact, location, logoImg, description, status, approved, Sid, Sname from ServiceProviders join Services using (Sid) where SPid='${SPid}'`,
            async (err, SP) => {
              if (err) {
                console.log(err);
                res.status(500).json("Something went wrong");
              } else {
                //checking whether admin exists
                if (SP.length < 1) {
                  res.status(400).json("Bad Request");
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
                  });
                }
              }
            }
          );
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json('"Something went wrong"');
  }
});

//API for updating SP Owner Info \/
router.post("/updateSpOwner/:SPid", async (req, res) => {
  try {
    const SPid = parseInt(req.params.SPid, 10);
    const { firstName, lastName, email, position, tel, location, desc } =
      req.body;
    const newOwner = {
      position,
      firstName,
      lastName,
      location,
      email,
      contact: tel,
      desc,
    };
    db.query(`update SPOwners set? where SPid='${SPid}'`, newOwner, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json("Bad Something Went wrong");
      } else {
        db.query(
          `update ServiceProviders set status='suspended' where SPid='${SPid}'`,
          (err) => {
            if (err) {
              console.log(err);
              res.status(500).json("Bad Something Went wrong");
            } else {
              db.query(
                `select SPid, SPname, email, contact, location, logoImg, description, status, approved, Sid, Sname from ServiceProviders join Services using (Sid) where SPid='${SPid}'`,
                async (err, SP) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json("Something went wrong");
                  } else {
                    //checking whether admin exists
                    if (SP.length < 1) {
                      res.status(400).json("Bad Request");
                    } else {
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
                }
              );
            }
          }
        );
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json('"Something went wrong"');
  }
});

//Fetch SP Auth Bypass
router.post("/bypassSPfetch/:SPid", (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  const { token } = req.body;
  if (`${SPid}`.length < 1 || token !== "SWQ324232LFP") {
    res.status(400).json("Bad Request");
  } else {
    db.query(
      `select SPid, SPname, email, contact, location, logoImg, hash, description, status, approved, rateValue, reviewsNo, Sid, Sname from ServiceProviders join Services using (Sid) join Ratings using (SPid) where SPid='${SPid}'`,
      async (err, SP) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something went wrong");
        } else {
          //checking whether admin exists
          if (SP.length < 1) {
            res.status(400).json("Bad Request");
          } else {
            db.query(
              `select * from SPOwners where SPid='${SPid}'`,
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
          }
        }
      }
    );
  }
});

// //API for rating the service provider
// router.post("/rateSP/:id/:rateValue", async (req, res) => {
//   const reviewNo = req.body.reviewNo;
//   const Spid = req.params.id;
//   const rateValue = parseInt(req.params.rateValue);
//   if (reviewNo == null || reviewNo == "") {
//     return res.status(400).json("Bad request");
//   } else {
//     db.query(
//       `insert into Ratings set SPid="${Spid}",rateValue="${rateValue}",reviewsNo="${reviewNo}"`,
//       (err) => {
//         if (err) {
//           console.log(err);
//           res.status(400).json("Something Went wrong");
//         } else {
//           res.status(200).json("Success");
//         }
//       }
//     );
//   }
// });

module.exports = router;
