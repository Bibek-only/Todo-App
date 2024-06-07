import Router from "express";
import {addTodo} from "../controller/export.controller.js"
const todo = Router();

todo.route("/addTodo").post(addTodo);


export {todo}