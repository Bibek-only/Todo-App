import { Todo } from "../model/exprort.model.js";
async function updateTodo(req,res,next){
   let updateInfo = req.body;

//  logic to update the todo
   await Todo.updateOne({_id:updateInfo._id},{
    title: updateInfo.title
   })

   res.send("the todo was sucessfully updated")

}

export {updateTodo}