import mongoose from "mongoose";
const db = "mongodb://localhost:27017"

let connectDb = async () =>{
    try {
            let dbInstance = await mongoose.connect(`${db}/todoapp`)
    } catch (error) {

            console.log("some error in connectin to data base");
    }
}

export {connectDb}