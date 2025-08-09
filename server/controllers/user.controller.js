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

const register = (req,res)=>{
    try {
        res
        .status(200)
        .json({ message: req.body });
    console.log(req.body);
} 
catch (error) {
     console.log(error.message);    
}

}


export default {home,register};
