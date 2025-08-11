import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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

userSchema.pre('save',async function(next){

    if(!this.isModified("password")) return next();
    
     this.password = await bcrypt.hash(this.password,10);
     next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.sharePasswords = function(){
    return this.password;
}

userSchema.methods.generateToken = async function(next){
    try {
       return await jwt.sign({
        userId: this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin
       },
         process.env.JWT_SECRET_KEY,
         {
            expiresIn:"30d",
         }
    )

        
    } catch (error) {
        console.log(error)
    }

}

export const User = mongoose.model("User",userSchema);