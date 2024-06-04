import mongoose from "mongoose";
import {User} from "../model/exprort.model.js"
import {Todo} from "../model/exprort.model.js"

async function registerUser(req,res,next){
    // zod schema for input validation
    

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
        password: "hfdf"
    })

   
    
    
    res.send("user created sucessfully")
}

export {registerUser}