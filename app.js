'use strict';

let koa =  require('koa');
let app = module.exports = koa();
let routes = require('koa-route');
let controller = require('./controllers/todo');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');
const apitodos = '/api/v1/todos/';

app.use(routes.get(apitodos+':id',controller.get));
app.use(routes.get(apitodos,controller.getAll));
app.use(routes.post(apitodos,controller.add));
app.use(routes.del(apitodos+':id',controller.del));
app.use(routes.put(apitodos+':id',controller.update));

app.listen(5000);
