const express = require('express');
const app = express();
const cors = require ('cors')
app.use(cors())

const Post = require('./models/index.js')

const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/love-writing');

var db = mongoose.connection;
db.on('error', function(error){
  console.log(error);
});
db.once('open', function() {
  console.log('success');
});

app.post('/posts',function(req,res){
  const post = new Post(req.body)
  // post.title = req.body.title;
  // post.content = req.body.content;
  post.save()
  res.json(req.body)
})

app.get('/posts',function(req,res){
  Post.find().exec(function(err, title) {
    if(err) return console.log(err);
    res.json({title:title})
  });
})

app.get('/posts/:id',function(req,res){
  res.send('read one post')
})
app.put('/posts/:id',function(req,res){
  res.send('update a post')
})
app.delete('/posts/:id',function(req,res){
  res.send('delete a post')
})

app.listen(3000,function(){
  console.log('hello world');
})
