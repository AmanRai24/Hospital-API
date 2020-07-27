const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
let Doctor = require('../../../models/doctor');
const Status = require('../../../config/status');

//Register a patient using name,phone and password
module.exports.register = async function(req, res){

    if(req.body.phone==undefined || req.body.name==undefined){
        return res.status(206).json({
            message: 'Incomplete data provided'
        });
    }

    let phone = req.body.phone;
    //Checking if patient is already registered in db
    let patientExists = await Patient.findOne({phone: phone});
    if(patientExists){
        return res.status(405).json({
            data:{
                patient:patientExists
            },
            message: 'Patient already Registered DB'
        })
    }

    try{
        //IF Patient is new Register new patient
        let createdPatient = await Patient.create(req.body);
        if(createdPatient){
            return res.status(200).json({
                data: {
                    patient:createdPatient,
                    
                },
                message: 'Patient Successfully Registered'
            });
        }
        else{
            return res.status(500).json({
                message: 'OOPS!! error'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: 'OOPS!! error'
        });
    }
}

//Create a Report for the patient using status and doctor ids
module.exports.createReport = async function(req, res){

    let patientId = req.params.id;
    let docId = req.body.doctor;

    if(patientId==undefined || docId==undefined){
        return res.status(206).json({
            message: 'Incomplete data provided'
        });
    }

    //get/mapping status of the patient from config folder
    let st = req.body.status;
    req.body.status = Status[st];
    try{
        let patient = await Patient.findById(req.params.id);
        let doctor = await Doctor.findById(req.body.doctor);

        //If the patient and doctor ids both exist only
        //then report created
        if(patient && doctor){
            req.body.patient = patientId;
            let report = await Report.create(req.body);
            if(report){
                //pushing the new report in the patients report array
                await patient.reports.push(report);
                await patient.save();
            }
           
            return res.status(200).json({
                data:{
                    report:{
                        patient: patient.name,
                        status: report.status,
                        doctor: doctor.name,
                        date: report.createdAt
                    }
                },
                message: 'Report successfully Created'
            })
        }
        else{
            return res.status(401).json({
                message: 'Patient/Doctor is not Registered'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: 'Oops!! Eror'
        });
    }
}

//fetchall reports of a patient 
module.exports.allReports = async function(req, res){
    
    try{
        let report=await Report.find({ patient:req.params.id }).sort("createdAt").populate('doctor').populate('patient');
        
        return res.status(200).json({
            data:{
                    report
            },
            message:'All reports of the patient',
          //details:report
        })
      }
      catch(err){
          return res.status(500).json({
          message:'OOPS!! Error Occured!'
        })
      }
    };