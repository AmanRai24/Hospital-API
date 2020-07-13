const express=require('express');
const router=express.Router();
const reports_controller=require('../../../controllers/api/v1/reports_controllers');

router.get('/:status',reports_controller.fetchReports);

module.exports=router;