import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
       type:String,
       required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,

    }
})

export const User = mongoose.model("User",userSchema);