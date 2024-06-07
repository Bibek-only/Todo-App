import Router from "express";
import {addTodo} from "../controller/export.controller.js"
import { getAllTodos } from "../controller/export.controller.js";
const todo = Router();

todo.route("/addTodo").post(addTodo);
todo.route("/getAllTodos").get(getAllTodos)

export {todo}