// file: controllers/todo.js - created at 2015-09-09, 12:45
'use strict';

const Todo = require('../models/todo');
const render = require('../helpers/render');
const parse = require('co-body');

module.exports.get = function *() {
  const todos = yield Todo.find({}).exec();
  this.body = yield render('index.jade',{title : 'Todo KoaJs' , todos : todos});
};

module.exports.formtodo = function *() {
  this.body = yield render('formtodo.jade',{title : 'Add Todo KoaJs'});
};

module.exports.addtodo = function *() {
  const todo = yield parse(this);
  try {
    const createdTodo = yield Todo.create(todo);
    createdTodo ? this.redirect('/') : this.throw(404);
  } catch (e) {
    this.body = yield render('formtodo.jade',{title : 'Add Todo KoaJs', invalid : e.errors.details.message});
  }
};

module.exports.removetodo = function *() {
  const removeTodo = yield Todo.remove({_id : this.params.id});
  removeTodo ? this.redirect('/') : this.throw(404);
};
