const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const dbURL = process.env.DB_URL;

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
//"mongodb://0.0.0.0:27017/airbnb"
console.log("mmm", dbURL);
mongoose.connect("mongodb://0.0.0.0:27017/airbnb");

app.get("/test", (req, res) => {
  console.log("req", req.body);
  res.json("test test");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  console.log("eeee", userDoc);
  let found = false;
  if (userDoc) {
    const passwordCheck = bcrypt.compareSync(password, userDoc.password);
    console.log("passwordCheck", passwordCheck);
    found = passwordCheck ? true : false;
  } else {
    console.log("not found", userDoc);
  }
});

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
