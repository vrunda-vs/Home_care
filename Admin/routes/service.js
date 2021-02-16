const express=require('express');
const router=express.Router();

var ServiceManagement=require('../controller/service');

router.post('/AddService',function(req,res){
    return ServiceManagement.AddService(req,res);
});



module.exports=router;