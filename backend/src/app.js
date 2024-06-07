import express from "express";
import {user, todo} from "./router/export.router.js"
const app = express();
app.use(express.json())

// config the router for registering a user
app.use('/api/v1/user',user)

// router config for todo operation
app.use('/api/v1/todo',todo)

export default app;

