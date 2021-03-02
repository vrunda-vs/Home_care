const express=require('express');
const router=express.Router();
var UserManagement=require('../controller/user')


//signup route
router.post('/Signup',(req,res)=>{
  return UserManagement.Signup(req,res);
})


//signin route
router.post('/SignIn',(req,res)=>{
  return UserManagement.SignIn(req,res);
})

//signout route
router.get('/Signout',(req,res)=>{
  return UserManagement.Signout(req,res);
})

router.put('/Updatecustomer/:id',UserManagement.isSignedIn,(req,res)=>{
  return UserManagement.UpdateCustomer(req,res);
})


//for testing purpose
router.get('/test',UserManagement.isSignedIn,(req,res)=>{
  return res.send("A protected route")
})
module.exports=router;