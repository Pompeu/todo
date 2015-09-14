'use strict';

let koa =  require('koa');
let app = module.exports = koa();
let routes = require('koa-route');
let mongoose = require('mongoose');
let serve = require('koa-static');

mongoose.connect('mongodb://localhost/todo');
app.use(serve('public'));

app.use(require('./routes/todo'));
app.use(require('./routes/todoLocals'));

app.listen(5000);
