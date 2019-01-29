const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const postRoutes = require("./routes/posts");


// mongo "mongodb+srv://cluster0-wyszx.mongodb.net/test" --username Richie
// ("mongodb+srv://Richie:<Ht0QiG8JhjSjDwxM>@cluster0-wyszx.mongodb.net/test?retryWrites=true")
mongoose.connect('mongodb://localhost/test')
    .then(() => {
      console.log('Connected to database!');
    })
    .catch(() => {
      console.log('Connection failed');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
// Ht0QiG8JhjSjDwxM
app.use("/api/posts", postRoutes);

module.exports = app;



