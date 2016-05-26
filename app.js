'use strict';

const koa =  require('koa');
const app = module.exports = koa();
const mongoose = require('mongoose');
const serve = require('koa-static');

mongoose.connect('mongodb://localhost/todo');
app.use(serve('public'));

app.use(require('./routes/todo'));
app.use(require('./routes/todoLocals'));

app.listen(5000);
