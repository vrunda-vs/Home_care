const client=require("../../Connection/connection");


exports.AddProvider=function(req,res){
    (async()=>{
        const getproviderdata=req.body;
        const addprovider=await client.query('insert into Provider(firstname,lastname,gender,mobile_no,email,address,image,area) values($1,$2,$3,$4,$5,$6,$7,$8)',[getproviderdata.firstname,getproviderdata.lastname,getproviderdata.gender,getproviderdata.mobile_no,getproviderdata.email,getproviderdata.address,getproviderdata.image,getproviderdata.area],(error)=>{
            if(error)
            {
                return error;
            }
            res.status(200).json({
                status:"Success",
                msg:"Provider added Succesfully"
            })
        })
    })();
}
exports.UpdateProvider=function(req,res){
    (async()=>{
        const getproviderdata=req.body;
        const provider_id=req.params.id;
        let dateobj=new Date();
        const updatecustomer=await client.query("update Provider set firstname=$1,lastname=$2,gender=$3,mobile_no=$4,email=$5,address=$6,image=$7,area=$8,modified_date=$9 where provider_id=$10",[getproviderdata.firstname,getproviderdata.lastname,getproviderdata.gender,getproviderdata.mobile_no,getproviderdata.email,getproviderdata.address,getproviderdata.image,getproviderdata.area,dateobj.getDate()+'-'+(dateobj.getMonth()+1)+'-'+dateobj.getFullYear(),provider_id],(error,responce)=>{
            if(error)
            {
                return error;
            }
            res.status(200).json({
                status:"Success",
                msg:"Provider Updated Succesfully"
            })
        })
    })();
}

exports.Deleteprovider=function(req,res){

    (async()=>{
      const provider_id=req.params.id;
      const deletesubservice=await client.query('delete from provider where provider_id=$1',[provider_id],(error)=>{
        if(error){
          return error;
        }
        res.status(200).json({
          status:"Success",
          msg:"Deleted Successfully"
        })

      })
    })();
}

exports.ViewProvider=function(req,res){
    (async()=>{
        const viewProvider=await client.query("Select firstname,lastname,gender,email,mobile_no,address,area from provider",(error,response)=>{
            if(error){
                return res.status(401).json(Error);
            }
            res.status(200).json({
                status:"success",
                data:response.rows
            })
        })
    })();
}