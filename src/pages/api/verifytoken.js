import jwt from "jsonwebtoken"
import Request from "../../../models/Requests";
import conndb from "../../../middleware/conndb";
const handler=async(req,res)=>{
    if(req.method=="POST"){
        try{
            const {token}=req.body;
            if(token){
                const decoded=jwt.decode(token);

                if(decoded.email && decoded.phone && decoded.restaurant_name){

                    const response=await Request.findOne({email:decoded.email,restaurant_name:decoded.restaurant_name, phone:decoded.phone});
                    if(response.status==='accepted')
                    {
                        res.status(200).json({success:true,data:response});
                    }
                    else{
                        res.status(201).json({success:false});
                    }
                }
                else{
                    res.status(201).json({success:false});
                }   
            }
            else{
                res.status(201).json({success:false});
            }

        }catch(err){
            res.status(201).json({success:false})
        }
    }
    else{
        res.status(201).json({success:false})
    }
}

export default conndb(handler);