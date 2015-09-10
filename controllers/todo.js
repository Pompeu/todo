// file: controllers/todo.js - created at 2015-09-09, 12:45
'use strict';
let Todo = require('../models/todo');
let parse = require('co-body');

module.exports = {
  add : add,
  get : get,
  getAll : getAll,
  del : del,
  update : update
}

function *add() {
  let todo = yield parse(this);
  let createdTodo = yield Todo.create(todo);
  if(createdTodo) {
     this.status = 202;
     this.set('location','/api/todos/'+createdTodo._id);
     this.body = createdTodo;
  }else {
      this.status = 404;
  } 
}

function *get(id) {
  let getTodo = yield Todo.findOne(id).exec();
  this.body = getTodo ? getTodo: this.status = 404;
}

function *getAll() {
  let allTodo = yield Todo.find({}).exec();
  this.body = allTodo ? allTodo : this.status = 404;
}

function *del (id){
  let delTodo = yield Todo.remove({_id : id});
  this.status = delTodo ? this.status = 204 : this.stats = 404;
}

function *update(id) {
  let body = yield parse(this);
  let updateTodo = yield Todo.update({_id : id},body);
  this.status = updateTodo.nModified ? 202 : 404;
}
