const client=require("../../Connection/connection");
client.connect();
exports.getAllCategory=function(req,res){
    (async()=>{
        const getallservices=await client.query('select * from Services');
                // console.log(result.rows);
                // console.log(result.rowCount);
                res.status(200).json(getallservices.rows);
        })();    
}
exports.getCategoryByName=function(req,res){  
    (async()=>{
        const catname=req.params.catname;        
        const getserviceid=await client.query('select service_id from Services where service_name=$1',[catname]);
                        // console.log(result.rows);
                        // console.log(result.rowCount);
                // res.json(result.rows[0]['service_id']);
                const id=parseInt(getserviceid.rows[0]['service_id']);
                const getSubService=await client.query('select * from SubServices where service_id=$1',[id]);
                res.json(getSubService.rows);
        })();    
}


