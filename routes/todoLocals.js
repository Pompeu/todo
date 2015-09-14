'use strict';

const apitodos = '/api/v1/todos';
let todoLocalsctrl = require('../controllers/todoLocals');

module.exports = require('koa-router')()
      .get('/',todoLocalsctrl.get)
      .get('/newtodo',todoLocalsctrl.formtodo)
      .post('/addtodo',todoLocalsctrl.addtodo)
      .get('/removetodo/:id',todoLocalsctrl.removetodo)
      .routes();

