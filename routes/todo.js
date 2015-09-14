'use strict';

const apitodos = '/api/v1/todos';
let todoctrl = require('../controllers/todo');

module.exports = require('koa-router')()
      .get(apitodos+'/:id',todoctrl.get)
      .get(apitodos,todoctrl.getAll)
      .post(apitodos,todoctrl.add)
      .del(apitodos+'/:id',todoctrl.del)
      .put(apitodos+'/:id',todoctrl.update)
      .routes();

