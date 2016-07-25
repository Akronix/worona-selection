/*
 * index.js
 * 
 * Descp: 
 * 
 * Created on: 24-jul-2016
 * 
 * Copyright 2016 Abel 'Akronix' Serrano Juste <akronix5@gmail.com>
 */

var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var a = 0, b = 0
    var result = '', operation = ''
    var aux = []
    
    console.log("Request for " + pathname + " received.");
    var aux = pathname.split("/");
    aux = aux.slice(1);
    operation = aux[0]
    a = parseInt(aux[1])
    b = parseInt(aux[2])
    console.log(aux);
    
    if (operation === 'sum') 
      result += a + b
    else if (operation === 'mul')
      result += a * b
    else
      result += "Not able to process this request URL: " + pathname;
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(result);
    response.end();
  }
  
  http.createServer(onRequest).listen(4000);
  console.log("Server has started.");
}

start( )
