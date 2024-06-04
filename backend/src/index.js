import app from "./app.js"
import {connectDb} from "./db/connect.db.js"

connectDb()
.then(()=>{
    console.log("database connect sucesfully");
    app.listen(3000,()=>{
        console.log("http://localhost:3000/")
    })
})
.catch((err)=>{
    console.log("some error in coonect to db ")
})