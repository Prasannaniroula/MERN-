import { success } from "zod";

const errorMiddleware = (err,req,res,next) =>{
    const status = err.statusCode || 500;
    const message = err.message || "Error in Backend";
    const extraDetails = err.errors || err.extraDetails || "Error occured";

    return res.status(status).json({
        success:false,
        message:message,
        extraDetails:extraDetails
    })
}

export {errorMiddleware}