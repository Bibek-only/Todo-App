import {registerUser} from "./registerUser.controller.js"
import {loginUser ,userName,password,ownerId} from "./loginUser.controller.js"
import {removeUser} from "./removeUser.controller.js"


import {addTodo} from "./addTodo.controller.js"
import { getAllTodos } from "./getAllTodos.controller.js"
import { removeTodo } from "./removeTodo.controller.js"
import { updateTodo } from "./updateTodo.register.js"
import {markAsDone} from "./markAsDone.controller.js"

export {registerUser, loginUser, removeUser, addTodo, getAllTodos,removeTodo,updateTodo,markAsDone,userName,password,ownerId}