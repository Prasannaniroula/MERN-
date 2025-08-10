import bcrypt from "bcryptjs";
import { User } from "../models/user.models.js"
import bcryptjs from "bcryptjs";

const home = async (req,res)=>{
    try {
            res
            .status(200)
            .send("Hello world")
    }
    catch (error) {
        console.log(error.message)
    }
}

const register = async (req,res)=>{
    try {
        const {username,email,password}= req.body;
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({msg:"email already exists"});
        }

      const user=  await User.create({username,email,password})
        console.log("User registered successfully")

        res
        .status(200)
        .json({ message: user });
} 
catch (error) {
    console.log("Couldnot update data in the database")
     console.log(error);    
}

}


export default {home,register};
