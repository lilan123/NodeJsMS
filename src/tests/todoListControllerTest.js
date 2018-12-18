var chai = require('chai'),
    chaiHttp = require('chai-http'), chai = require("chai"), server = require('../../app'),
    todoList = require('../readModel/viewModels/TodoItemViewModel'), should = chai.should();

chai.use(chaiHttp);    

/*
* Test the /GET route
*/
 describe('GET todoList', () => {
    it('it should GET all the todolist', (done) => {
      chai.request(server)
          .get('/api/v1/todolist')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
        });
    });

    it('it should NOT GET todolist', (done) => {
        chai.request(server)
            .get('/api/v1/todolist1')
            .end((err, res) => {
                res.should.have.status(404);
            done();
        });
    });
}); 

/*
* Test the /POST route
*/
  describe('/POST todo', () => {
    it('it should POST todo', (done) => {
        let todo = {
            name: "lilan test"
        }
      chai.request(server)
          .post('/api/v1/todolist')
          .send(todo)
          .end((err, res) => {
                res.should.have.status(200);
          
            done();
          }); 
    });

    it('it should NOT POST todo', (done) => {
        let todo = {
            name: "lilan test"
        }
      chai.request(server)
          .post('/api/v1/todolist1')
          .send(todo)
          .end((err, res) => {
                res.should.have.status(404);
          
            done();
          });
          
    });
});
