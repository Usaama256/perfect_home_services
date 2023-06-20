const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5427;

// app.use(express.json());
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "200mb" }));

app.use(express.static(path.join(__dirname, "views")));

app.use("/user.api/", require("./routes/user"));
app.use("/admin.api/", require("./routes/admin"));
app.use("/sp.api/", require("./routes/service_provider"));
app.use("/ls.api/", require("./routes/landing_site"));

//Fetching images
app.get("/images/:folder/:fName", (req, res) => {
  // console.log(req.params.folder, req.params.fName);
  res.sendFile(
    path.join(__dirname, `images/${req.params.folder}`, `${req.params.fName}`)
  );
});

//Front-end
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server up on port ${PORT} in ${app.settings.env} mode`)
);
