// file: controllers/todo.js - created at 2015-09-09, 12:45
'use strict';

const Todo = require('../models/todo');
const parse = require('co-body');

module.exports.add = function *add() {
  const todo = yield parse(this);
  const createdTodo = yield Todo.create(todo);

  if(createdTodo) {
    this.status = 201;
    this.set('location','/api/todos/'+createdTodo._id);
    this.body = createdTodo;
  } else {
    this.status = 404;
  } 
}

module.exports.get = function *get() {
  const getTodo = yield Todo.findOne({_id : this.params.id}).exec();
  this.body = getTodo ? getTodo : this.status = 404;
};

module.exports.getAll = function *getAll() {
  const allTodo = yield Todo.find({}).exec();
  this.body = allTodo ? allTodo : this.status = 404;
};

module.exports.del = function *del (){
  const delTodo = yield Todo.remove({_id : this.params.id});
  this.status = delTodo ? this.status = 204 : this.stats = 404;
};

module.exports.update = function *update() {
  const body = yield parse(this);
  const updateTodo = yield Todo.update({_id : this.params.id},body);

  if(updateTodo.nModified){
    this.status = 202;
    this.set('location','/api/todos/'+this.params.id);
    this.body = yield Todo.findOne({_id : this.params.id}).exec();
  } else {
    this.status = 404;
  } 
};
