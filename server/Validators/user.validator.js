import {z} from "zod";

const signupSchema = z.object({
username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 chars."})
    .max(255,{message:"Name must not be more than 255 character"}),
email: z
    .string({required_error: "E-mail is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{message:"Email must be atleast of 3 chars."})
    .max(255,{message:"Email must not be more than 255 character"}),
password: z
    .string({required_error: "password is required"})
    .trim()
    .min(8,{message:"Password must be atleast of 8 chars."})
    .max(255,{message:"Password must not be more than 255 character"}),
})

export {signupSchema};