process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev depencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);

describe("Display All Report of Patients Report Testing :", () => {
    // git 
    const patientID = "5f1ebf08b4bb9eafb132f4aa"; //patient1
  
    describe("GET /api/v1/patients/id/all_reports", () => {
      it("Error because Doctor is not Authorized:", (done) => {
        chai
          .request(server)
          .get(`/api/v1/patients/${patientID}/all_reports`)
         
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
  