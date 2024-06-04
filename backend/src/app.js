import express from "express";
import {user} from "./router/export.router.js"
const app = express();
app.use(express.json())

// config the router for registering a user
app.use('/api/v1/user',user)

export default app;

