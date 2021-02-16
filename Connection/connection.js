const Client=require('pg').Pool

const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'123456',
    database:'WeCareHomeCare'
})
client.on("connect",()=>{
    console.log("Database connected");
})
client.on("end",()=>{
    console.log("Database disconnected");
})
module.exports=client;
