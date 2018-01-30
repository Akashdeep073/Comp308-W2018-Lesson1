var connect = require('connect');
var http = require('http');
 
var app = connect();
http.createServer(app).listen(3000);

app.use('/hello',(req, res, next) =>{
    res.setHeader("Content-Type","text/plain");
  //  res. res.setHeader('Content-Type', 'text/plain');
    res.end('Hello cruel World ');
    next();
  });

app.use('/',(req, res, next) =>{
    res.setHeader("Content-Type","text/plain");
  //  res. res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World and console for info printed by logger');
    next();
  });