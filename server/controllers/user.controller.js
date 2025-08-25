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

      const user=  await User.create({username,email,password})
        console.log("User registered successfully")

        res
        .status(200)
        .json({
             message: user, 
             token: await user.generateToken(),
             userId: user._id.toString(),
            
            });
} 
catch (error) {
    console.log("Couldnot update data in the database")
     console.log(error);    
}

}


const login = async(req,res)=>{
  try {
      //take data like username or email from req.body
      //check username or email data existed in db or not
      //check password
      //token
      //cookies
  
  
      const {email,password} = req.body;
      if(!email){
         return res
         .status(400)
         .json({
          success:false,
          message: "Email is required"
         })
      }
      const userExists = await User.findOne({email});
      if(!userExists){
          return res
          .status(404)
          .json({
              success:false,
              message: "The email you have provided is not registered in the DB"
          })
      }
      const isPasswordValid = await userExists.isPasswordCorrect(password);
  
      if(!isPasswordValid){
        console.log("The password you have entered is not correct");
        return res 
        .status(404)
        .json({
          success:false,
          message: "The password you have entered is not correct"
        })
       
      }
      else{
        res
        .status(200)
        .json({
             message: "Login successfull", 
             token: await userExists.generateToken(),
             userId: userExists._id.toString(),
            
            });
      // }
      //    const hashPassword= userExists.sharePasswords();
      //    console.log(hashPassword)
      //    const passwordHash = await bcrypt.hash(password,10);
      //    console.log(passwordHash);
      //    if(hashPassword===passwordHash){
      //     console.log("equal password");
      //    }
      //    else{
      //     console.log("password doesnot match")
      //    }
  
  } 
}catch (error) {
  console.log(error)
    res
    .status(500)
    .json({
        status:500,
        message:"Error occured"
    })
    
  }

}


const user = async (req,res)=>{
  try {
    const userData = req.user;
    console.log(userData);
    return res
    .status(200)
    .json({
      message:userData
    });

    
  } catch (error) {

    console.log("Error occured",error)
    
  }

}

export default {home,register,login, user};
