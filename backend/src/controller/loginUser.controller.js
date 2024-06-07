import {User} from "../model/exprort.model.js"
import zod from "zod"
let userName,password,ownerId;
async function loginUser(req,res,next){

    let userInfo = req.body;
 
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

    //logic to login a user
    const isUserExist = await User.findOne({
        $or: {userName: req.body.userName, password: req.body.password}
    })

    if(! isUserExist){
        
        res.send("no user is exist on the data base");
        return
    }
    const userId = isUserExist._id;
   
     userName = userInfo.userName;
     password = userInfo.password;
     ownerId = userId
    res.send("user find sucesfully and you are logd in ")
    
}

export {loginUser, userName,password,ownerId}