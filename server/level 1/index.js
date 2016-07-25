/*
 * index.js
 * 
 * Descp: 
 * 
 * Created on: 24-jul-2016
 * 
 * Copyright 2016 Abel 'Akronix' Serrano Juste <akronix5@gmail.com>
 */

var express = require('express'); 
var app = express();

app.get('/sum/:a/:b', function (req, res) {
  res.send(new String(parseInt(req.params.a)+parseInt(req.params.b)));
});

app.get('/mul/:a/:b', function (req, res) {
  res.send(new String(parseInt(req.params.a)*parseInt(req.params.b)));
});

app.listen(4000, function () {
  console.log('Server listening on port 4000.');
});
