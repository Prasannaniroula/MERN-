import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

import dotenv from "dotenv";
dotenv.config();

const authMiddleware = async (req,res,next)=>{
   const token = req.header('Authorization');

   if(!token){
    return res 
    .status(401)
    .json({message: "Unauthorized HTTP, Token not provided"})
   }


const jwtToken = token.replace("Bearer","").trim();

try {
      
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({email: isVerified.email}).select("-password")
    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
    
} catch (error) {
    return res.status(401).json({message:"Unauthorized. Invalid Token."})
    
}


}

export default authMiddleware;