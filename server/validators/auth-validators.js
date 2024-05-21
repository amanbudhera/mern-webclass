const {z}=require("zod")


const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at list of 3 character"})
    .max(100,{message:"email must not be more then 100 character"}),
    password:z
    .string({required_error:"Password is required"})
    .min(6,{message:"password must be at list 6 character."})
    .max(500,{message:"password must not be more than 500 characters"}),
})

const signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at list 3 character."})
    .max(200,{message:"Name must not be more than 200 characters"}),
    // email:z
    // .string({required_error:"Email is required"})
    // .trim()
    // .email({message:"Invalid email"})
    // .min(3,{message:"email must be at list 3 character."})
    // .max(200,{message:"email must not be more than 200 characters"}),
    phone:z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"phone must be at list 10 character."})
    .max(20,{message:"phone must not be more than 20 characters"}),
    // password:z
    // .string({required_error:"Password is required"})
    // .trim()
    // .min(6,{message:"password must be at list 6 character."})
    // .max(500,{message:"password must not be more than 500 characters"}),
})
module.exports = {signupSchema,loginSchema}