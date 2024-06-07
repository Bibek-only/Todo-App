import { ownerId } from "./export.controller.js"
import { Todo } from "../model/todo.model.js"
async function getAllTodos(req,res,next){
    //logic to get all todos from the database for specific user
   
    let allTodos = await Todo.find({
        owner: ownerId
    })

    
    res.json(allTodos)

}

export {getAllTodos}