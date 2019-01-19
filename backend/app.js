const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  res.setHeader(
    "Allow-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  res.status(201).json({
    message: 'Post added successfully'
  });
  console.log(post);
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fdijidfjfid',
      title: 'First server side post',
      content: 'This is coming from the server'
    },
    {
      id: 'fdicdssd',
      title: 'Second server side post',
      content: 'Second post is coming from the server'
    }
  ];
  res.status(200).json({
    message : 'Posts fectched successfully',
    posts: posts
  });
});

module.exports = app;



