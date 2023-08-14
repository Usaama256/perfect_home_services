const db = require("./db/db_man");
const { uploadImage } = require("./routes/methods");
const bcrypt = require("bcryptjs");

/*
const cleaning = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/cleaning1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/cleaning2.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/cleaning3.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/cleaning4.jpg",
    desc: "",
  },
];

const electrical = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/electrical1.jpeg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/electricals1.webp",
    desc: "",
  },
];

const decoration = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/decoration1.webp",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/decoration2.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/decoration3.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/landscaping2.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/interior_design.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/interior_design2.webp",
    desc: "",
  },
];

const fumigation = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/fumigation1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/fumigation2.png",
    desc: "",
  },
];

const laundry = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/laundry1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/laundry2.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/laundry3.webp",
    desc: "",
  },
];

const painting = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/painting1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/painting2.jpg",
    desc: "",
  },
];

const renovation = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/renovation1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/renovation2.png",
    desc: "",
  },
];

const security = [
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/security1.jpg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/security2.jpeg",
    desc: "",
  },
  {
    title: "",
    src: "http://perfect-home-services-lruh4.ondigitalocean.app/images/services/security3.jpg",
    desc: "",
  },
];

const genArr = [
  laundry,
  security,
  cleaning,
  painting,
  fumigation,
  decoration,
  renovation,
  electrical,
];

for (var i = 1; i <= genArr.length; i++) {
  const imgs = JSON.stringify(genArr[i - 1]);
  // console.log(genArr[i]);
  // if (i == 0) console.log(imgs);
  db.query(
    `update Services set imgs='${imgs}' where Sid=${i};`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(i, "Success");
      }
    }
  );
  console.log(i, "Done");
}
*/

// export const dummySPs = [
//   {
//     id: "2569ce0d517a7f06d3ea1f24",
//     desc: "Excel is a home interior designing company based based in Jinja",
//     title: "Excel Interior Designers Ltd",
//     owner: "",
//     sId: "S00jTr",
//     location: "Jinja",
//     email: ["example@sample.com", "example@sample.com", "example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "active",
//     rating: { value: 3.1, reviews: 10 },
//     pricing: [
//       {
//         id: 1,
//         name: "Suite(Complete)",
//         price: 10,
//         currency: "USD",
//         img1: laundry[0].src,
//         img2: laundry[1].src,
//         img3: laundry[2].src,
//       },
//       {
//         id: 2,
//         name: "Trouser",
//         price: 2,
//         currency: "USD",
//         img2: laundry[1].src,
//         img3: laundry[2].src,
//       },
//       { id: 3, name: "Coat", price: 4, currency: "USD" },
//       {
//         id: 4,
//         name: "Shirt",
//         price: 3,
//         currency: "USD",
//         img2: laundry[1].src,
//       },
//       {
//         id: 5,
//         name: "Tie",
//         price: 1,
//         currency: "USD",
//         img3: laundry[2].src,
//       },
//     ],
//   },
//   {
//     id: "ed2b900870ceba72d203ec15",
//     desc: "William Suites executive provides laundry services specializing in men and women suites",
//     logo: logo_g,
//     title: "Willium Suite Co",
//     owner: "",
//     sId: "S10XkQ",
//     location: "Wakiso",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "pending",
//     rating: { value: 4.4, reviews: 6 },
//     pricing: [
//       { id: 1, name: "Suite(Complete)", price: 10, currency: "USD" },
//       { id: 2, name: "Trouser", price: 2, currency: "USD" },
//       { id: 3, name: "Coat", price: 4, currency: "USD" },
//       { id: 4, name: "Shirt", price: 3, currency: "USD" },
//       { id: 5, name: "Tie", price: 1, currency: "USD" },
//     ],
//   },
//   {
//     id: "ed02b900870ceba72d203ec15",
//     desc: "Dealers In All Kinds Home Electronics",
//     logo: logo_b,
//     title: "Trust Electronics",
//     owner: "",
//     sId: "S31QsB",
//     location: "Kampala",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "active",
//     rating: { value: 4.9, reviews: 43 },
//     pricing: [{ id: 1, name: "Wiring", price: 50, currency: "USD" }],
//   },
//   {
//     id: "a033e38768c82fca90df3db7",
//     desc: "Offers fumigation services, erradicates rats, bats, bedbugs and all house pests",
//     logo: logo_g,
//     title: "GoPest",
//     owner: "",
//     sId: "S19iyv",
//     location: "Kampala",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "active",
//     rating: { value: 4.6, reviews: 4 },
//     pricing: [
//       {
//         id: 1,
//         name: "Fumigastion (Start Price)",
//         price: 150000,
//         currency: "UGX",
//         desc: "Depends on the size of work",
//       },
//     ],
//   },
//   {
//     id: "1efecb2bf6a51def9869ab0f",
//     desc: "Offer Amazing Painting Solution",
//     logo: logo_b,
//     title: "Real-Estate Painters",
//     owner: "",
//     sId: "S11HFc",
//     location: "Mukono",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "active",
//     rating: { value: 3, reviews: 2 },
//     pricing: [
//       {
//         id: 1,
//         name: "Painting",
//         desc: "Negotiable",
//       },
//     ],
//   },
//   {
//     id: "1ed68149f65fbc6089b5fd07",
//     desc: "The best home security services provider in Uganda",
//     logo: logo_g,
//     title: "Securecs",
//     owner: "",
//     sId: "S09snH",
//     location: "Kampala",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "pending",
//     rating: { value: 4.0, reviews: 1 },
//     pricing: [
//       {
//         id: 1,
//         name: "Security Guards",
//         desc: "Meeting Required",
//       },
//     ],
//   },
//   {
//     id: "1ed68149f65fbc6089b5fd0f7",
//     desc: "Provide electrical all installations, repairing and all appliances",
//     logo: logo_b,
//     title: "Next Electrical Solutions",
//     owner: "",
//     sId: "S31QsB",
//     location: "Mbale",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "pending",
//     rating: { value: 0, reviews: 0 },
//     pricing: [
//       {
//         id: 1,
//         name: "Connection Wiring",
//         desc: "Depends on size of work, Negotiable",
//       },
//     ],
//   },
//   {
//     id: "5dab321376eff6177407e887",
//     desc: "Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services",
//     logo: logo_b,
//     title: "Ali'sFix Co Ltd",
//     owner: "",
//     sId: "S31QsA",
//     location: "Wakiso",
//     email: ["example@sample.com"],
//     tel: ["071233424234", "032 424 234234", "000 8000 1223"],
//     status: "pending",
//     rating: { value: 3.9, reviews: 63 },
//     pricing: [
//       {
//         id: 1,
//         name: "Connection Wiring",
//         desc: "Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable",
//       },
//     ],
//   },
// ];

// uploadImage("csdcsdcs", "tesat", "tesat")
//   .then((result) => {
//     console.log(1, result);
//   })
//   .catch((e) => console.log(e));

// const date = new Date();
// console.log(
//   //   date.toDateString()
//   date.toISOString()
//   //   date.toLocaleDateString()
//   //   date.toLocaleTimeString() //EA Time
//   //   date.toString() //EA Date and Time
//   //   date.toTimeString() ////EA Time ext
//   //   date.toUTCString() // GMT DAte and time
// );

// console.log(__dirname);

// const name = "nkangi usaama opio musa";

// console.log(name.replace(/ /g, "-"));

// db.query("select * from Services", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const filtered = result.map((i, n) => {
//       return { ...i, imgs: JSON.parse(i.imgs) };
//     });
//     console.log(filtered[0].imgs);
//   }
// });

const testAdmin = async () => {
  const hash = await bcrypt.hash("test@test.coms", 10);
  const new_admin = {
    firstName: "Tester",
    lastName: "Testing",
    email: "test@test.com",
    phone: "256700605769",
    location: "kibuli",
    hash,
  };
  db.query("insert into Admin set?", new_admin, (err) => {});
};

// db.query("select * from Services where active='1'", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // { id: "S31QsB", name: "Electrical Services", desc: "", imgs: [] }
//     const filtered = result.map((i, n) => {
//       console.log(JSON.parse(i.imgs));
//       return {
//         id: i.Sid,
//         name: i.Sname,
//         desc: "",
//         imgs: JSON.parse(i.imgs),
//         // imgs: i.images,
//       };
//     });
//     console.log(filtered);
//   }
// });

// const SPid = 9;
// db.query(
//   `select SPid, SPname, email, contact, location, logoImg, description, status, approved, rateValue, reviewsNo, ServiceProviders.createdAt, ServiceProviders.updatedAt, Sid, Sname from ServiceProviders join Services using (Sid) join Ratings using (SPid) where SPid='${SPid}'`,
//   (err, SP) => {
//     if (err) {
//       console.log(err);
//       console.log("Something went wrong");
//     } else {
//       db.query(
//         `select * from SPOwners where SPid='${SPid}'`,
//         (err, SPOwner) => {
//           if (err) {
//             console.log(err);
//             console.log("Something went wrong");
//           } else {
//             console.log({
//               SPid: SP[0].SPid,
//               email: SP[0].email,
//               title: SP[0].SPname,
//               tel: SP[0].contact,
//               location: SP[0].location,
//               desc: SP[0].description,
//               logo: SP[0].logoImg,
//               status: SP[0].status,
//               approved: SP[0].approved,
//               Sid: SP[0].Sid,
//               Sname: SP[0].Sname,
//               rating: { value: SP[0].rateValue, reviews: SP[0].reviewsNo },
//               owner: {
//                 SPid: SP[0].SPid,
//                 OwnerId: SPOwner[0].OwnerId,
//                 position: SPOwner[0].position,
//                 firstName: SPOwner[0].firstName,
//                 lastName: SPOwner[0].lastName,
//                 location: SPOwner[0].location,
//                 email: SPOwner[0].email,
//                 tel: SPOwner[0].contact,
//                 desc: SPOwner[0].desc,
//                 avator: SPOwner[0].profilePic,
//               },
//             });
//           }
//         }
//       );
//     }
//   }
// );
