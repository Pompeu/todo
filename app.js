'use strict';

let koa =  require('koa');
let app = module.exports = koa();
let routes = require('koa-route');
let todoctrl = require('./controllers/todo');
let todoLocalsctrl = require('./controllers/todoLocals');
let mongoose = require('mongoose');
let serve = require('koa-static');
let jade = require('jade');
let path = require('path');
let render = require('./helper/render');
mongoose.connect('mongodb://localhost/todo');
app.use(serve('public'));

app.use(routes.get('/',todoLocalsctrl.get));
app.use(routes.get('/newtodo',todoLocalsctrl.formtodo));
app.use(routes.post('/addtodo',todoLocalsctrl.addtodo));
app.use(routes.get('/removetodo/:id',todoLocalsctrl.removetodo));

const apitodos = '/api/v1/todos/';
app.use(routes.get(apitodos+':id',todoctrl.get));
app.use(routes.get(apitodos,todoctrl.getAll));
app.use(routes.post(apitodos,todoctrl.add));
app.use(routes.del(apitodos+':id',todoctrl.del));
app.use(routes.put(apitodos+':id',todoctrl.update));

app.listen(5000);
