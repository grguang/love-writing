const express = require('express');
const app = express();
const cors = require ('cors')

const routes = require('./routes.js')
app.use(cors())

const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

routes(app) //写在app。use(bodyParser.json())  之后，这里的参数 app 会把 bodyParser 也传入

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



app.listen(3000,function(){
  console.log('hello world');
})
