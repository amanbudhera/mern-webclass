const jwt = require("jsonwebtoken")
const User = require("../models/user-model")
User

const authMiddleware = async(req, res, next)=>{
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401)
        .json({message:"unautharized HTTP,Token not provide"})
    }

    //token not found
    const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQ4NGRmYzZhYzFkNDVkNGE3NjY0YzUiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTYwOTUxMzQsImV4cCI6MTcxODY4NzEzNH0.dj-o8U2r8cKSUtpVqWuPczTfVEZs-vmQtgzSycxD6rQ`
    // const jwtToken = token.replace("Bearer","").trim()
    // console.log(token)
    // console.log('token from auth middleware',jwtToken)

    try {

        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECTECT_KEY)

        const userData = await User.findOne({email:isVerified.email}).select({password:0})
        req.user=userData
        req.token=token
        req.userID=userData._id
        // console.log('abcdata'+userData)
    next()
    } catch (error) {
        return res.status(401).json({msg:"unautharized invalid token"})
        next()
    }
}

module.exports = authMiddleware
