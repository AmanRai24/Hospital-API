//During the test the env variable is set to test
process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev dependencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);
//parent block
describe("Display All Report of Patients Report Testing :", () => {
    const patientID = "5f1ee3895f05cd0cf9819236"; //patient1
    /*
        * Test the /GET route
    */
    //case: Show all reports of the Patient
    describe("GET /api/v1/patients/id/all_reports", () => {
      it("All reports of the patient:", (done) => {
        chai
          .request(server)
          .get(`/api/v1/patients/${patientID}/all_reports`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("All reports of the patient");
            done();
          });
      });
    });
  });
  