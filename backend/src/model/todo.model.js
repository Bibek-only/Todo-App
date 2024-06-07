import mongoose from "mongoose";
import { boolean } from "zod";
const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    isComplete:{
        type: Boolean,
        required: true,
        default: false
    },
    owner:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"   
    }
},{timestamps: true})

const Todo = mongoose.model("Todo",todoSchema);

export {Todo}
