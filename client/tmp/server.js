var express = require('express');
var app = express();

app.use(express.static('public'));
//public 是个文件夹，可以叫任意名字； static 的意思是 静态 ，静态文件就是纯粹的 xxx.html xxx.css xxx.js 这些文件，他们是不会再服务器上执行的。
//这句话的意思： 搭建一个静态服务器，所有页面放在 public 文件夹下。而且 public 下的文件，都不会被服务器进行处理
// 用跟 本文件平级的一个 public 夹作为静态文件的存放位置
// 没有这一行，后面 sendFile 的 index.html 就找不到了。

app.get('*', function(req, res){
  res.sendFile('index.html',{root:"public"});
});



app.listen(3000, function(err) {
  console.log('Listening at http://localhost:3000');
});
