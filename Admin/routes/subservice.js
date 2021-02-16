const express=require('express');
const router=express.Router();

var SubServiceManagement=require('../controller/subservice');

router.post('/AddSubService',function(req,res){
    return SubServiceManagement.AddSubService(req,res);
});

router.put('/UpdateSubService/:id',function(req,res){
    return SubServiceManagement.UpdateSubService(req,res);
})

router.delete('/DeleteSubService/:id',function(req,res){
    return SubServiceManagement.DeleteSubService(req,res);
})

module.exports=router;