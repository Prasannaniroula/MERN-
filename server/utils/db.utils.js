import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = async ()=>{ 
try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database is connected successfully");
} catch (error) {
    console.log("Database connection Failed");
    console.log(error);
}
}

export default DB;