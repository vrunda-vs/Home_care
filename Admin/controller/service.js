const client=require("../../Connection/connection");

exports.AddService=function(req,res){
   
    (async()=>{
        let servicedata=req.body; 
        const result=await client.query('insert into Services(service_name,service_image) values($1,$2)',[servicedata.service_name,'app.jpg'],(error,responce)=>{
            if(error)
            {
                throw error
            }
            res.status(200).json({
                status:"Success",
                msg:"Insert Record Succesfully",
                val:servicedata.service_name
            });
        });
        
    })();

}


