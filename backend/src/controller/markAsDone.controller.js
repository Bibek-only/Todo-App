import { Todo } from "../model/exprort.model.js"

async function markAsDone(req,res,next){
    let todoInfo = req.body;
    let todo = await Todo.findOne({_id:todoInfo._id});
    let isDone = todo.isComplete
    
    
    
    await Todo.updateOne({_id: todoInfo._id},
        {
            isComplete: !isDone
        }
    )

    res.send("todo is updated")
}

export {markAsDone}