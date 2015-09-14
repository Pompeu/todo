// file: tests/todo-ctrl.test.js - created at 2015-09-09, 03:15
'use strict';

let should = require('chai').should();
let request =  require('superagent');
let ch =  require('charlatan');
let url =  require('url');
const ABS_URL = 'http://localhost:5000/api/v1/todos';

describe('todoCtrl', () => {
  
  let todo = {
    details : ch.Name.title()
  };
  let id = null;

 // before(() => {});

  it('should be create a todo in api', (done) => {
    request
      .post(url.resolve(ABS_URL,'todos'))
      .send(todo)
      .end((err , res) => {
        res.should.be.exist;
        res.body.should.be.a('Object');
        res.body._id.should.exist;
        res.status.should.be.eql(201);
        id = res.body._id;
        done();
      })
  });

  it('should be get one todo by id', (done) => {
     request
      .get(url.resolve(ABS_URL,'todos/'+id))
      .end((err , res) => {
        res.should.be.exist;
        res.body.should.be.a('Object');
        res.status.should.be.eql(200);
        res.body._id.should.exist;
        done();
      })
  });

  it('should be getall todos', (done) => {
     request
      .get(url.resolve(ABS_URL,'todos'))
      .end((err , res) => {
        res.should.be.exist;
        res.body.should.be.a('Array');
        res.status.should.be.eql(200);
        done();
      })
  });

  it('should be update one todo by id set status true', (done) => {
    var body = {
      isDone : true  
    };
    request
      .put(url.resolve(ABS_URL,'todos/'+id))
      .send(body)
      .end((err , res) => {
        res.status.should.be.ok;
        res.status.should.be.eql(202);
        done();
      });
  });

  it('should be delete one todo by id' , (done) => {
    request
      .del(url.resolve(ABS_URL,'todos/'+id))
      .end((err , res) => {
        res.should.be.exist;
        res.status.should.be.eql(204)
        done();      
      });
  });
  
});
