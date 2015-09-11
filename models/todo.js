// file: models/todo.js - created at 2015-09-09, 10:40
function todoHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;

  schema = new Schema({
    // start with schema here
   details    : { type : String,  required : true, trin : true},
   isDone     : { type : Boolean, default : false},
   initalData : { type : Date,    default : Date.now},
  });

  return mongoose.model('Todo', schema);
}
module.exports = exports = todoHandler();
