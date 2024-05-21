const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//instence method (jwt)// userschma.method is instense method we can create as many functon as we want
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECTECT_KEY,
        {expiresIn:"30d"}
    )
    } catch (error) {
        console.error(error)
    }
}


userSchema.methods.comparepasword = async function (password){
    return bcrypt.compare(password,this.password)
}


//? secure password with bcrypt
//it is like medalwear run before saving data in databsde
userSchema.pre('save',async function (next) {
    const user = this

    if(!user.isModified('password')){
        next()
    }
    try {
        const saltRaound=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltRaound)
        user.password= hash_password
    } catch (error) {
        next(error)
    }
})



const User = new mongoose.model('User',userSchema)

module.exports=User