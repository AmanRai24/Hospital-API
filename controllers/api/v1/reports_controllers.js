const Report = require('../../../models/report');
const Status = require('../../../config/status');

//get/fetch all reports by using status
module.exports.fetchReports = async function(req, res){
    let status = Status[req.params.status];

    if(status==undefined){
        return res.status(404).json({
            message:'Error'
        });
    }

    try{
        let reportstatus = await Report.find({status: status}).sort("createdAt").populate('patient doctor');

            return res.status(200).json({
                data: {reportstatus},
                message: 'All report of this status'
            });
        }
    catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error'
        });
    }
}