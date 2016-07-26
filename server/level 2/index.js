/*
 * index.js
 *
 * Descp:
 *
 * Created on: 24-jul-2016
 *
 * Copyright 2016 Abel 'Akronix' Serrano Juste <akronix5@gmail.com>
 */

import express from 'express';
import logic from './logic.js';
var app = express()

const Promise = require('bluebird')
function wrap (genFn) {
    const cr = Promise.coroutine(genFn);
    return function (req, res, next) {
        cr(req, res, next).catch(next);
    }
}

async function waitTime(seg){
  return new Promise (function(resolve,reject){
    setTimeout(resolve,seg)
  });
}

app.get('/wait/:s', wrap(async function (req, res) {
      const time = await waitTime(req.params.s)
      res.send("Sucess");
}));

app.listen(4000, function () {
  console.log('Server listening on port 4000.');
});
