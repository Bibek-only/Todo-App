import Router from "express"
import {registerUser} from "../controller/export.controller.js"


const user = Router();

user.route("/register").post(registerUser)

export { user }