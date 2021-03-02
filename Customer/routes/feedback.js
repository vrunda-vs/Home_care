const express=require('express');
const router=express.Router();
var FeedbackManagement=require('../controller/feedback')
const {isSignedIn}=require('../../Customer/controller/user')

router.post('/AddFeedback/:id',isSignedIn,(req,res)=>{
    return FeedbackManagement.AddFeedback(req,res);
})

router.get('/ViewFeedback/:id',(req,res)=>{
    return FeedbackManagement.ViewFeedback(req,res);
})

module.exports=router;