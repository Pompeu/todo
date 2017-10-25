// file: models/todo.js - created at 2015-09-09, 10:40
'use strict';

function todoHandler() {
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  let schema = new Schema({
    details    : { type : String,  required : true, trin : true},
    isDone     : { type : Boolean, default : false},
    initalData : { type : Date,    default : Date.now},
  });

  return mongoose.model('Todo', schema);
}

module.exports = exports = todoHandler();
