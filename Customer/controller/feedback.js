const client=require("../../Connection/connection");


exports.AddFeedback=function(req,res){
    (async()=>{
        const feedbackdata=req.body;
        const customer_id=req.params.id;
        const addfeedback=await client.query('insert into feedback(customer_id,subservice_id,review,rating) values($1,$2,$3,$4)',[customer_id,feedbackdata.subservice_id,feedbackdata.review,feedbackdata.rating],(error)=>{
            if(error){
                return res.json(error);
            }
                res.status(200).json({
                status:'Success',
                msg:'Feedback Added Succesfully'
            })
        })
    })();
}

exports.ViewFeedback=function(req,res){
    (async()=>{
        const subservice_id=req.params.id;
        const addfeedback=await client.query('select firstname ,lastname ,review,rating,Feedback.created_date from Feedback left join Customer on Customer.customer_id=Feedback.customer_id where subservice_id=$1',[subservice_id],(error,response)=>{
            if(error){
                return res.json(error);
            }
                res.status(200).json({
                status:'Success',
                msg:response.rows
            })
        })
    })();
}

