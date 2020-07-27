process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev depencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);

describe("Patients Report Testing:", () => {
    let Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlYmVmNmI0YmI5ZWFmYjEzMmY0YTkiLCJuYW1lIjoiQW1hbiIsInBhc3N3b3JkIjoiMSIsImVtYWlsIjoiYW1hbkBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJfX3YiOjAsImlhdCI6MTU5NTg1MDQ5MCwiZXhwIjoxNTk2ODUwNDkwfQ.r44B6PfuS_BqDf-UJBkitElUrIJ9BSJ2en2HYL1c0wE";
    let auth = "Bearer "+Token;
    const patientID = "5f1ebf08b4bb9eafb132f4aa"; //patient1
  
    describe("POST /api/v1/patients/id/create_report", () => {
      it("Error because Doctor is not Authorized:", (done) => {
        let report = {
          status: 0,
          doctor: "5f1ebef6b4bb9eafb132f4a9" ,
        };
  
        chai
          .request(server)
          .post(`/api/v1/patients/${patientID}/create_report`)
          .send(report)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
      });
    });
  
    
    describe("POST /api/v1/patients/id/create_report", () => {
      it("Error because of Incomplete data provided :", (done) => {
        let report = {
            status: 0,
            // doctor: "5f1ebef6b4bb9eafb132f4a9" ,
        };
  
        chai
          .request(server)
          .post(`/api/v1/patients/${patientID}/create_report`)
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(report)
          .end((err, res) => {
            res.should.have.status(206);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Incomplete data provided");
            done();
          });
      });
    });
  
    
    describe("POST /api/v1/patients/id/create_report", () => {
      it("Report Successfully Created:", (done) => {
        let report = {
          status: 0,
          doctor: "5f1ebef6b4bb9eafb132f4a9" ,
        };
  
        chai
          .request(server)
          .post(`/api/v1/patients/${patientID}/create_report`)
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(report)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Report successfully Created");
            done();
          });
      });
    });
  });
  