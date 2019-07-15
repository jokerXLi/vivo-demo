const express = require("express");
const server = express();
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/www/html/index.html");
});
server.get("/details.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/details.html");
});
server.get("/cartAddSuccess.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/cartAddSuccess.html");
});
server.get("/login1.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/login1.html");
});
server.get("/login2.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/login2.html");
});
server.get("/register.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/register.html");
});
server.get("/shoppingcar.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/shoppingcar.html");
});
server.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/login.html");
});
server.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/www/html/index.html");
});
// 处理静态资源
//注意post请求不能使用use方法
//  /js：表示所有js请求的前缀 
server.use('/layer', express.static(__dirname + '/www/layer/layer.js'));
server.use('/js', express.static(__dirname + '/www/js'));
server.use('/css', express.static(__dirname + '/www/css'));
server.use('/data', express.static(__dirname + '/www/data'));
server.use('/images', express.static(__dirname + '/www/images'));
server.use('/img', express.static(__dirname + '/www/data/img'));
server.use('/font', express.static(__dirname + '/www/font'));
server.listen(8080, error => {
  if (error) {
    console.log("启动失败");
  } else {
    console.log("启动成功");
  }
});
