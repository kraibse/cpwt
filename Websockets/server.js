const http = require('http');
const fs = require("fs");

/*==========
HTTP SEVER
============*/
const httpserver = http.createServer(function (req, res) {
  var path = req.url;
  if(path==="/") {
    path="/index.html";
  }
  if(req.url.includes("html")) {
    var type = "text/html";
  }
  else if(req.url.includes("css")) {
    var type = "text/css";
  }
  else if(req.url.includes("js")) {
    var type = "application/javascript";
  }
  else if(req.url.includes("json")) {
    var type = "application/json";
  }
  else if(req.url.includes("jpg")) {
    var type = "image/jpeg";
  }
  else if(req.url.includes("png")) {
    var type = "image/png";
  }
  else {
    var type = "text/html";
  }
  fs.readFile(`./public${path}`,function(error,data) {
    if(error) {
      res.writeHead(404)
      res.write("Not Found")
      res.end();
    }
    else {
      res.writeHead(200, {'Content-Type': `${type}`});
      res.write(data);
      res.end();
    }
  });
});
httpserver.listen(8080);

const io = require("socket.io")(httpserver);
const seceretmsg = "...";
io.on("connection",(socket)=> {
    console.log("user joined");
    socket.on("req",(data)=>{
        if(data == "12345") {
            socket.emit("answer",`Secret Message:${seceretmsg}`);
        }
        else{
            socket.emit("answer","Wrong password");
        }
    })
});