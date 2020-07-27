process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev depencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);

describe("Display All Report of Patients Report Testing :", () => {
    let Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlYmVmNmI0YmI5ZWFmYjEzMmY0YTkiLCJuYW1lIjoiQW1hbiIsInBhc3N3b3JkIjoiMSIsImVtYWlsIjoiYW1hbkBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTI3VDExOjQ4OjA2LjYyMVoiLCJfX3YiOjAsImlhdCI6MTU5NTg1MDQ5MCwiZXhwIjoxNTk2ODUwNDkwfQ.r44B6PfuS_BqDf-UJBkitElUrIJ9BSJ2en2HYL1c0wE";
    let auth = "Bearer "+Token;
    const patientID = "5f1ebf08b4bb9eafb132f4aa"; //patient1
  
    describe("GET /api/v1/patients/id/all_reports", () => {
      it("Error because Doctor is not Authorized:", (done) => {
        chai
          .request(server)
          .get(`/api/v1/patients/${patientID}/all_reports`)
         
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
      });
    });
  
    //---- Case 2:  All Report Displayed Successfully
    describe("GET /api/v1/patients/id/all_reports", () => {
      it("All reports of the patient:", (done) => {
        chai
          .request(server)
          .get(`/api/v1/patients/${patientID}/all_reports`)
          .set("Authorization", auth)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("All reports of the patient");
            done();
          });
      });
    });
  });
  