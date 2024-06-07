import {Todo} from "../model/exprort.model.js"
import { ownerId } from "./export.controller.js"
import zod from "zod"

// function to add to do for a specific user
async function addTodo(req,res,next){
    let todoInfo = req.body;

    // zod schema for input validation
    const bodySchema = zod.object({
        title: zod.string()
    })

    //input validation of the todo
    const isIPValid = bodySchema.safeParse(todoInfo);
    if(! isIPValid.success){
        res.send("the input is not valid")
        return
    }

    await Todo.create({
        title :todoInfo.title,
        owner: ownerId
    })

   res.send("your todo created sucess fully")
    
    
}

export {addTodo}
