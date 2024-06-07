import {Todo} from "../model/exprort.model.js"
async function removeTodo(req,res,next){
    //logic to remove the todo
    let todoId = req.body._id;
    await Todo.deleteOne({
        _id: todoId
    })
    res.send("the todo removed sucessfully")
}

export { removeTodo }