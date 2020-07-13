const express=require('express');
const router=express.Router();
const doctors_controller=require('../../../controllers/api/v1/doctors_controller');

router.post('/register',doctors_controller.register);
router.post('/login',doctors_controller.login);


module.exports=router;