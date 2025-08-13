import { ApiError } from "../utils/ApiError.js";
import { ZodError } from "zod";

const validate = (schema) =>async( req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
        
    } catch (err) {
      if(err instanceof ZodError){
        const errors = err.errors.map(e=>`${e.path.join(".")}:${e.message}`);
        return next(new ApiError(400,"Validation failed",errors))
      }
      next(err);
    }

}

export {validate}