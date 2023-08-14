const express = require("express");
const router = express.Router();
const db = require("../db/db_man");
const bcrypt = require("bcryptjs");
const {
  verify_email,
  loginMtdAdmin,
  fetchSP,
  fetchSPpdts,
  uploadImage,
} = require("./methods");

//API for registering the  \/
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, pass, phone, location } = req.body;
  if (
    firstName == null ||
    firstName == "" ||
    lastName == null ||
    lastName == "" ||
    email == null ||
    email == "" ||
    phone == null ||
    phone == "" ||
    location == null ||
    location == ""
  ) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    if (verify_email(email)) {
      //encrypting the password into string of and numbers using hash method,
      const hash = await bcrypt.hash(pass, 10);
      const new_admin = {
        firstName,
        lastName,
        email,
        phone,
        location,
        hash,
      };
      db.query("insert into Admin set?", new_admin, (err) => {
        if (err) {
          console.log(err);
          if (err.errno == 1062) {
            res.status(400).json("Admin already registerd");
          } else {
            res.status(400).json("Bad request");
          }
        } else {
          res.status(200).json("Registerd Successfully");
        }
      });
    } else {
      res.status(400).json("Bad Request");
    }
  }
});

//API to sign in the admin \/
router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  loginMtdAdmin(email, pass, res);
});

//API for admin to view all users \/
router.get("/fetchUsers", async (req, res) => {
  db.query("select * from Users", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    } else {
      const filtered = result.map((i, n) => {
        const { hash, ...rest } = i;
        return rest;
      });
      res.status(200).json(filtered);
    }
  });
});

//API for admin to view all service providers \/
router.get("/fetchSPs", async (req, res) => {
  db.query(
    "select SPid, SPname, email, contact, location, logoImg, description, status, approved, rateValue, reviewsNo, ServiceProviders.createdAt, ServiceProviders.updatedAt, Sid, Sname from ServiceProviders join Services using (Sid) join Ratings using (SPid) order by SPid desc",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

//API for admin to single service provider \/
router.get("/fetchSP/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  fetchSP(SPid, res);
});

//Fetching single SP products \/
router.get("/getPdts/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (req.params.SPid.length <= 0) {
    return res.status(400).json("Bad Request");
  } else {
    fetchSPpdts(SPid, res);
  }
});

//Fetching single SP reviews \/
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

//Fetching all services \/
router.get("/getservices", async (req, res) => {
  try {
    db.query("select * from Services", (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something Went Wrong");
      } else {
        const filtered = result.map((i, n) => {
          return { ...i, imgs: JSON.parse(i.imgs) };
        });
        res.status(200).json(filtered);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Didn't go right");
  }
});

//API for adding service by the admin \/
router.post("/addService", async (req, res) => {
  try {
    const { Sname, desc, imgsArr } = req.body;

    if (Sname == "" || Sname == null) {
      res.status(404).json("Bad Request");
    } else {
      if (imgsArr.length > 1) {
        const images = [];
        var blankNum = 0;
        imgsArr.forEach((i, n) => {
          const fName = `${Sname.replace(/ /g, "-")}_${n + 1}`;
          uploadImage(i, fName, "services").then((name) => {
            if (i?.length > 20) {
              images.push({
                title: "",
                src: `http://perfect-home-services-lruh4.ondigitalocean.app/images/services/${name}`,
                desc: "",
              });
              console.log("Service image Uploaded");
            } else {
              blankNum += 1;
            }
            if (images.length + blankNum == imgsArr.length) {
              const imgs = JSON.stringify(images);
              const newService = {
                Sname,
                desc,
                imgs,
              };
              db.query("insert into Services set?", newService, (err) => {
                if (err) {
                  console.log(err);
                  if (err.errno == 1062) {
                    res.status(400).json("Service Exists");
                  } else {
                    res.status(400).json("Bad request");
                  }
                } else {
                  db.query("select * from Services", (err, result) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json("Something Went Wrong");
                    } else {
                      const filtered = result.map((i, n) => {
                        return { ...i, imgs: JSON.parse(i.imgs) };
                      });
                      res.status(200).json(filtered);
                    }
                  });
                }
              });
            }
          });
        });
      } else {
        const newService = {
          Sname,
          desc,
          // imgs: imgArr,
        };
        db.query("insert into Services set?", newService, (err) => {
          if (err) {
            console.log(err);
            if (err.errno == 1062) {
              res.status(400).json("Service Exists");
            } else {
              res.status(400).json("Bad request");
            }
          } else {
            db.query("select * from Services", (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).json("Something Went Wrong");
              } else {
                const filtered = result.map((i, n) => {
                  return { ...i, imgs: JSON.parse(i.imgs) };
                });
                res.status(200).json(filtered);
              }
            });
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Didn't go right");
  }
});

//Enabling a service \/
router.get("/enableService/:Sid", async (req, res) => {
  try {
    const Sid = parseInt(req.params.Sid, 10);
    db.query(`update Services set active='1' where Sid='${Sid}'`, (err) => {
      if (err) {
        console.log(err);
        res.status(400).json("Failed");
      } else {
        db.query("select * from Services", (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json("Something Went Wrong");
          } else {
            const filtered = result.map((i, n) => {
              return { ...i, imgs: JSON.parse(i.imgs) };
            });
            res.status(200).json(filtered);
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('"Something went wrong"');
  }
});

//Disabling a service \/
router.get("/disableService/:Sid", async (req, res) => {
  try {
    const Sid = parseInt(req.params.Sid, 10);
    db.query(`update Services set active='0' where Sid='${Sid}'`, (err) => {
      if (err) {
        console.log(err);
        res.status(400).json("Failed");
      } else {
        db.query("select * from Services", (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json("Something Went Wrong");
          } else {
            const filtered = result.map((i, n) => {
              return { ...i, imgs: JSON.parse(i.imgs) };
            });
            res.status(200).json(filtered);
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json('"Something went wrong"');
  }
});

//API for editing a service by the admin \/
router.post("/editService/:Sid", async (req, res) => {
  try {
    const Sid = parseInt(req.params.Sid, 10);
    const { name, desc } = req.body;

    if (name == "" || name == null) {
      res.status(404).json("Bad Request");
    } else {
      const newService = {
        name,
        desc,
        // imgs: imgArr,
      };
      db.query(`update Services set? where Sid='${Sid}'`, newService, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went Wrong");
        } else {
          db.query("select * from Services", (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json("Something Went Wrong");
            } else {
              const filtered = result.map((i, n) => {
                return { ...i, imgs: JSON.parse(i.imgs) };
              });
              res.status(200).json(filtered);
            }
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('"Something went wrong"');
  }
});

//Update Service Images \/
router.post("/editServiceImgs/:Sid", async (req, res) => {
  try {
    const Sid = parseInt(req.params.Sid, 10);
    const { name, imgsArr } = req.body;

    if (imgsArr.length > 1) {
      const images = [];
      imgsArr.forEach((i, n) => {
        const fName = `${name.replace(/ /g, "-")}_${n + 1}`;
        uploadImage(i, fName, "services").then((name) => {
          images.push(
            `http://perfect-home-services-lruh4.ondigitalocean.app/images/services/${name}`
          );
          console.log("Service image Uploaded");
          if (images.length == imgsArr.length) {
            const imgs = JSON.stringify(images);
            db.query(
              `update Services set imgs='${imgs}' where Sid='${Sid}'`,
              (err) => {
                if (err) {
                  console.log(err);
                  res.status(500).json("Bad request");
                } else {
                  db.query("select * from Services", (err, result) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json("Something Went Wrong");
                    } else {
                      const filtered = result.map((i, n) => {
                        return { ...i, imgs: JSON.parse(i.imgs) };
                      });
                      res.status(200).json(filtered);
                    }
                  });
                }
              }
            );
          }
        });
      });
    } else {
      res.status(400).json("No images to update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
});

//API for enabling a service provider by the admin \/
//Allows SPs to log into their accounts
router.get("/approveSP/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (SPid == null || SPid == "") {
    return res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProviders set approved='1' where SPid='${SPid}'`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            fetchSP(SPid, res);
          }
        }
      }
    );
  }
});

//API for disabling a service provider by the admin \/
//Stops an SP from logging into their account
router.get("/disapproveSP/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (SPid == null || SPid == "") {
    return res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProviders set approved='0' where SPid='${SPid}'`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            fetchSP(SPid, res);
          }
        }
      }
    );
  }
});

//API for activating a service provider by the admin \/
//Allows SPs to start interracting with users
router.get("/activateSP/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (SPid == null || SPid == "") {
    return res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProviders set status='active' where SPid='${SPid}'`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            fetchSP(SPid, res);
          }
        }
      }
    );
  }
});

//API for suspend a service provider by the admin \/
//Stops SPs from interracting with clients but can log in
router.get("/suspendSP/:SPid", async (req, res) => {
  const SPid = parseInt(req.params.SPid, 10);
  if (SPid == null || SPid == "") {
    return res.status(400).json("Bad request");
  } else {
    db.query(
      `update ServiceProviders set status='suspended' where SPid='${SPid}'`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something Went wrong");
        } else {
          if (result.affectedRows == 0) {
            res.status(400).json("Service Provider Doesnt exist");
          } else {
            fetchSP(SPid, res);
          }
        }
      }
    );
  }
});

//Admin Fetch totals
router.get("/gettotals", (req, res) => {
  db.query(
    "select count(SPid) as count from ServiceProviders union all select count(Uid) from Users",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Something Went Wrong");
      } else {
        res.status(200).json({
          SPs: parseInt(result[0].count, 10),
          users: parseInt(result[1].count, 10),
        });
      }
    }
  );
});

// //API for deleting the service
// router.delete("/delService/:id", async (req, res) => {
//   //service id got from the user side
//   const Sid = req.params.id;
//   if (Sid == null || Sid == "") {
//     res.status(400).json("Bad Request");
//   } else {
//     db.query(`select * from Services where Sid="${Sid}"`, (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).json({ message: "Something Went Wrong" });
//       } else {
//         if (result.length <= 0) {
//           res.status(400).json({ Message: "Invalid request" });
//         } else {
//           db.query(`delete from Services where Sid="${Sid}"`, (error) => {
//             if (error) {
//               console.log(error);
//               res.status(500).json("Something went wrong");
//             } else {
//               res.status(200).json({ Message: "Service Deleted" });
//             }
//           });
//         }
//       }
//     });
//   }
// });

module.exports = router;
