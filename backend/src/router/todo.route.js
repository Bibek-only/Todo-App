import Router from "express";
import {addTodo, getAllTodos, removeTodo,updateTodo} from "../controller/export.controller.js"
const todo = Router();

todo.route("/addTodo").post(addTodo);
todo.route("/getAllTodos").get(getAllTodos)
todo.route("/removeTodo").delete(removeTodo)
todo.route("/updateTodo").put(updateTodo)

export {todo}