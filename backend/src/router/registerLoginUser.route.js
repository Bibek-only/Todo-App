import Router from "express"
import {registerUser} from "../controller/export.controller.js"
import { loginUser } from "../controller/export.controller.js";


const user = Router();

user.route("/register").post(registerUser);
user.route("/login").get(loginUser)

export { user }