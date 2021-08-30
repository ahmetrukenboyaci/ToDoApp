let server = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe('ToDo APIs', () => {
    describe("POST /api/todos", () => {
        it("should POST a new todo", (done) => {
            const todo = {
                description: "ToDo 4"
            };
            chai.request(server)
                .post("/api/todos")
                .send(todo)
                .end((err, response) => {
                    response.should.have.status(201);
                    done();
                });
        }).timeout(10000);

        it("should NOT POST a new todo without the description property", (done) => {
            const todo = {
                done: false
            };
            chai.request(server)
                .post("/api/todos")
                .send(todo)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        }).timeout(10000);

    });

    describe("Test GET route /api/todos", () => {
        it("should return all todos", (done) => {
            chai.request(server)
                .get("/api/todos")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("GET /api/todos/:id", () => {

        it("should GET a todo by ID", (done) => {
            let todoId = '';
            chai.request(server)
                .get("/api/todos")
                .end((err, response) => {
                    todoId = response.body[0]._id;
                    chai.request(server)
                        .get("/api/todos/" + todoId)
                        .end((err, r) => {
                            r.should.have.status(200);
                            r.body.should.be.a('object');
                            r.body.should.have.property('_id');
                            r.body.should.have.property('description');
                            r.body.should.have.property('done');
                            r.body.should.have.property('_id').eq(todoId);
                            done();
                        });
                });
        });

        it("should NOT GET a todo by ID", (done) => {
            const todoId = 123;
            chai.request(server)
                .get("/api/todos/" + todoId)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        });
    });

    describe("PUT /api/todos/:id", () => {
        it("should PUT an existing todo", (done) => {
            const todoId = '61280aeac00ffa1923701bb4';
            const todo = {
                description: "ToDo 1 changed",
                done: true
            };
            chai.request(server)
                .put("/api/todos/" + todoId)
                .send(todo)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });
    });

    describe("DELETE /api/todos/:id", () => {
        it("should DELETE an existing todo", (done) => {
            const todoId = '61280aeac00ffa1923701bb4';
            chai.request(server)
                .delete("/api/todos/" + todoId)
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("should NOT DELETE a todo that is not in the database", (done) => {
            const todoId = 145;
            chai.request(server)
                .delete("/api/todos/" + todoId)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        });

    });

    describe("DELETE /api/todos", () => {
        it("should DELETE all existing todos", (done) => {
            chai.request(server)
                .delete("/api/todos")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("should NOT DELETE a todo that is not in the database", (done) => {
            const todoId = 145;
            chai.request(server)
                .delete("/api/todos/" + todoId)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        });

    });
});
