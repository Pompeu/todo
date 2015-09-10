// file: controllers/todo.js - created at 2015-09-09, 12:45
'use strict';
let Todo = require('../models/todo');
let render = require('../helper/render');
let parse = require('co-body');

module.exports.get = function *() {
  let todos = yield Todo.find({}).exec();
  this.body = yield render('index.jade',{title : "Todo KoaJs" , todos : todos});
}

module.exports.newtodo = function *() {
  this.body = yield render('formtodo.jade',{title : "Add Todo KoaJs"});
}

module.exports.addtodo = function *() {
  let todo = yield parse(this);
  let createdTodo = yield Todo.create(todo);
  if(createdTodo){
    let todos = yield Todo.find({}).exec();
    this.body = yield render('index.jade',{title : "Todo KoaJs", todos : todos });
  }
}
module.exports.removetodo = function *(id) {
  let delTodo = yield Todo.remove({_id : id});
  if(delTodo){
    let todos = yield Todo.find({}).exec();
    this.body = yield render('index.jade',{title : "Todo KoaJs", todos : todos });
  }
}
