import { User } from "../models/user.models.js"

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

        await User.create({username,email,password})
        console.log("User registered successfully")

        res
        .status(200)
        .json({ message: req.body });
        console.log(req.body);
} 
catch (error) {
    console.log("Couldnot update data in the database")
     console.log(error.message);    
}

}


export default {home,register};
