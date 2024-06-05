import mongoose from "mongoose";
import {User} from "../model/exprort.model.js"
import {Todo} from "../model/exprort.model.js"
import zod from "zod"

async function registerUser(req,res,next){

    let userInfo = req.body;
    console.log(userInfo);

    // zod schema for input validation
    const bodySchema = zod.object({
        userName:zod.string(),
        password: zod.string()
    })
    const isIPValid = bodySchema.safeParse(userInfo)
    if(! isIPValid.success){
        res.send("the input is not vlid");
        return;
    }

    //check the user is exist or not in the database
   let isRegistered =  await User.findOne({
        userName: req.body.userName
    })

    // logic to check the user is already registerd or not
    if(isRegistered){
        console.log("user is already registered")
        res.send("user is already registered")
        return;
    }

    // create the actual user
    await User.create({
        userName: req.body.userName,
        password: req.body.password
    })

   
    
    
    res.send("user created sucessfully")
}

export {registerUser}