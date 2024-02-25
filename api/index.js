const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Place = require("./models/PlaceForm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const dbURL = process.env.DB_URL;

const jwtSecret = "dscdfjhcvfjdvfndv";
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    preflightContinue: true,
    credentials: true,
    origin: "*",
    exposedHeaders: ["set-cookie"],
    accessControlAllowCredeantials: true,
  })
);
// origin: "http://localhost:5173/",
app.use(cookieParser());
//"mongodb://0.0.0.0:27017/airbnb"
mongoose.connect("mongodb://0.0.0.0:27017/airbnb");
const conf = {
  signed: true,
  path: "/",
  secure: false,
  maxAge: 60 * 60 * 10000000,
  httpOnly: false,
};

app.get("/", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

app.get("/place/:id", async (req, res) => {
  const { id } = req.params;
  const place = await Place.findById(id);
  res.json(place);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  let found = false;
  if (userDoc) {
    const passwordCheck = bcrypt.compareSync(password, userDoc.password);
    console.log("passwordCheck", passwordCheck);
    if (passwordCheck) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          console.log("toke index login", token);
          res.cookie("token", token, conf);
        }
      );
    } else {
      res.json("Wrong password");
    }
    found = passwordCheck ? true : false;
    res.json(userDoc);
  } else {
    console.log("not found", userDoc);
    res.json("not found");
  }
});
app.get("/login", (req, res) => {
  res.cookie("login", "logindetails", conf);
});
// app.get("/test", (req, res) => {
//   // const { token } = req.cookies;
//   // res.json({ token });
//   res.cookie("sabina", "test cookie", conf);
//   res.json("json ok");
// });

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  res.json(userDoc);
});

app.listen(4000);
