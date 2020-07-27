process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev depencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);

describe("Patients Register Testing :", () => {
    let Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlYmVmNmI0YmI5ZWFmYjEzMmY0YTkiLCJuYW1lIjoiQW1hbiIsInBhc3N3b3JkIjoiMSIsImVtYWlsIjoiYW1hbkBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJfX3YiOjAsImlhdCI6MTU5NTg1MDQ5MCwiZXhwIjoxNTk2ODUwNDkwfQ.r44B6PfuS_BqDf-UJBkitElUrIJ9BSJ2en2HYL1c0wE";
    let auth = "Bearer "+Token;
  
   
    describe("POST /api/v1/patients/register", () => {
      it("Eror because Doctor is not Authorized:", (done) => {
        let patient = {
          name: "patient11",
          phone: 100000001,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .send(patient)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
      });
    });
  
  
    describe("POST /api/v1/patients/register", () => {
      it("Error because of Incomplete data provided :", (done) => {
        let patient = {
          name: "patient12",
         // phone: 100000002,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(206);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Incomplete data provided");
            done();
          });
      });
    });
  
    
    describe("POST /api/v1/patients/register", () => {
      it("Patient already Exist:", (done) => {
        let patient = {
          name: "patient1",
          phone: 789456123,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(405);
            res.body.should.be.a("object");
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Patient already Registered DB");
            done();
          });
      });
    });
  
   
    describe("POST /api/v1/patients/register", () => {
      it("Patient Successfully Registered:", (done) => {
        let patient = {
          name: "patient3",
          phone: 100000003,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Patient Successfully Registered");
            done();
          });
      });
    });
  });
  