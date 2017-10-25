// file: tests/todo.test.js - created at 2015-09-09, 10:40
'use strict';

const should = require('chai').should();
const Todo = require('../models/todo');

describe('todo',() => {

  const todo = new Todo({ details : "Nova Tarefa" });

  it('todo should be a object', () => {
    todo.should.be.a('Object');
  });

  it('todo should have properts details isDone initalData finishDate', () => {
    todo.should.have.property('details');
    todo.should.have.property('isDone');
    todo.should.have.property('initalData');
  });
  
  it('todo should dont be have details is empty and isDone start with false', () => {
    todo.details.should.be.an('String');
    todo.isDone.should.be.false;
  });

});
