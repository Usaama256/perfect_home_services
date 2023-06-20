const db = require("./db/db_man");

// const cleaning = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/cleaning1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/cleaning2.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/cleaning3.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/cleaning4.jpg",
//     desc: "",
//   },
// ];

// const electrical = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/electrical1.jpeg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/electricals1.webp",
//     desc: "",
//   },
// ];

// const decoration = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/decoration1.webp",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/decoration2.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/decoration3.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/landscaping2.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/interior_design.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/interior_design2.webp",
//     desc: "",
//   },
// ];

// const fumigation = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/fumigation1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/fumigation2.png",
//     desc: "",
//   },
// ];

// const laundry = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/laundry1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/laundry2.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/laundry3.webp",
//     desc: "",
//   },
// ];

// const painting = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/painting1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/painting2.jpg",
//     desc: "",
//   },
// ];

// const renovation = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/renovation1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/renovation2.png",
//     desc: "",
//   },
// ];

// const security = [
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/security1.jpg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/security2.jpeg",
//     desc: "",
//   },
//   {
//     title: "",
//     src: "http://localhost:5427/images/services/security3.jpg",
//     desc: "",
//   },
// ];

// const genArr = [
//   laundry,
//   security,
//   cleaning,
//   painting,
//   fumigation,
//   decoration,
//   renovation,
//   electrical,
// ];

// for (var i = 1; i <= genArr.length; i++) {
//   const imgs = JSON.stringify(genArr[i - 1]);
//   // console.log(genArr[i]);
//   // if (i == 0) console.log(imgs);
//   db.query(
//     `update Services set images='${imgs}' where Sid=${i};`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(i, "Success");
//       }
//     }
//   );
//   console.log(i, "Done");
// }

export const dummySPs = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    desc: "Excel is a home interior designing company based based in Jinja",
    title: "Excel Interior Designers Ltd",
    owner: "",
    sId: "S00jTr",
    location: "Jinja",
    email: ["example@sample.com", "example@sample.com", "example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 3.1, reviews: 10 },
    pricing: [
      {
        id: 1,
        name: "Suite(Complete)",
        price: 10,
        currency: "USD",
        img1: laundry[0].src,
        img2: laundry[1].src,
        img3: laundry[2].src,
      },
      {
        id: 2,
        name: "Trouser",
        price: 2,
        currency: "USD",
        img2: laundry[1].src,
        img3: laundry[2].src,
      },
      { id: 3, name: "Coat", price: 4, currency: "USD" },
      {
        id: 4,
        name: "Shirt",
        price: 3,
        currency: "USD",
        img2: laundry[1].src,
      },
      {
        id: 5,
        name: "Tie",
        price: 1,
        currency: "USD",
        img3: laundry[2].src,
      },
    ],
  },
  {
    id: "ed2b900870ceba72d203ec15",
    desc: "William Suites executive provides laundry services specializing in men and women suites",
    logo: logo_g,
    title: "Willium Suite Co",
    owner: "",
    sId: "S10XkQ",
    location: "Wakiso",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 4.4, reviews: 6 },
    pricing: [
      { id: 1, name: "Suite(Complete)", price: 10, currency: "USD" },
      { id: 2, name: "Trouser", price: 2, currency: "USD" },
      { id: 3, name: "Coat", price: 4, currency: "USD" },
      { id: 4, name: "Shirt", price: 3, currency: "USD" },
      { id: 5, name: "Tie", price: 1, currency: "USD" },
    ],
  },
  {
    id: "ed02b900870ceba72d203ec15",
    desc: "Dealers In All Kinds Home Electronics",
    logo: logo_b,
    title: "Trust Electronics",
    owner: "",
    sId: "S31QsB",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 4.9, reviews: 43 },
    pricing: [{ id: 1, name: "Wiring", price: 50, currency: "USD" }],
  },
  {
    id: "a033e38768c82fca90df3db7",
    desc: "Offers fumigation services, erradicates rats, bats, bedbugs and all house pests",
    logo: logo_g,
    title: "GoPest",
    owner: "",
    sId: "S19iyv",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 4.6, reviews: 4 },
    pricing: [
      {
        id: 1,
        name: "Fumigastion (Start Price)",
        price: 150000,
        currency: "UGX",
        desc: "Depends on the size of work",
      },
    ],
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    desc: "Offer Amazing Painting Solution",
    logo: logo_b,
    title: "Real-Estate Painters",
    owner: "",
    sId: "S11HFc",
    location: "Mukono",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "active",
    rating: { value: 3, reviews: 2 },
    pricing: [
      {
        id: 1,
        name: "Painting",
        desc: "Negotiable",
      },
    ],
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    desc: "The best home security services provider in Uganda",
    logo: logo_g,
    title: "Securecs",
    owner: "",
    sId: "S09snH",
    location: "Kampala",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 4.0, reviews: 1 },
    pricing: [
      {
        id: 1,
        name: "Security Guards",
        desc: "Meeting Required",
      },
    ],
  },
  {
    id: "1ed68149f65fbc6089b5fd0f7",
    desc: "Provide electrical all installations, repairing and all appliances",
    logo: logo_b,
    title: "Next Electrical Solutions",
    owner: "",
    sId: "S31QsB",
    location: "Mbale",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 0, reviews: 0 },
    pricing: [
      {
        id: 1,
        name: "Connection Wiring",
        desc: "Depends on size of work, Negotiable",
      },
    ],
  },
  {
    id: "5dab321376eff6177407e887",
    desc: "Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services, Ali's Offer the best home renovation services",
    logo: logo_b,
    title: "Ali'sFix Co Ltd",
    owner: "",
    sId: "S31QsA",
    location: "Wakiso",
    email: ["example@sample.com"],
    tel: ["071233424234", "032 424 234234", "000 8000 1223"],
    status: "pending",
    rating: { value: 3.9, reviews: 63 },
    pricing: [
      {
        id: 1,
        name: "Connection Wiring",
        desc: "Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable, Depends on nature of work, Negotiable",
      },
    ],
  },
];
