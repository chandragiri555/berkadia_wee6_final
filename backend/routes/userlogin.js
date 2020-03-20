const express=require('express');
const router=express.Router();
const userlogin=require('../services/userlogin');


router.post('/register',async(req,res)=>{
    try{
        let username=req.body.username;
        let password=req.body.password;

        let callservice=new userlogin();
        let result=await callservice.register(username,password);
        if(result)
         res.send({
             message: 'registered successfully'
         })
    }catch (error){
        res.send({
            message: error.message
        })
    }
})

router.post("/loginpage",async (req,res)=>{
        try{
            let username=req.body.username;
            let password=req.body.password;
            let callservice=new userlogin();
            let result=await callservice.userlogin(username,password);
            if(result.rowCount===1)
            {
                res.send({
                    message: "user logged in"
                })
            }
            }catch (error)
            {
            console.log(error);
            res.send({
                message: error.message
            })
           
        }
})
    

    module.exports=router;