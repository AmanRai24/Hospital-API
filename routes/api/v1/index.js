const express=require('express');
const router=express.Router();

router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/reports',require('./reports'));

module.exports=router;