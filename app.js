var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var app=express();
const CustomerCategoryRoutes=require('./Customer/routes/category');

const AdminServiceRoutes=require('./Admin/routes/service');
const AdminSubServiceRoutes=require('./Admin/routes/subservice');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
//customers

app.use('/api',CustomerCategoryRoutes)

//Admin
app.use('/api',AdminServiceRoutes)
app.use('/api',AdminSubServiceRoutes)



const port=3000;
app.listen(port,()=>{
    console.log("app is running"+port);
})