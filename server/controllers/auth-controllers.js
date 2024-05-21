
const User = require('../models/user-model')
// const { use } = require('../router/auth-router')
// const bcrypt = require('bcryptjs')



const home = async (req,res)=>{
    try{
        res
        .status(200).send("hello world")
    } catch(err){
        console.log(err)
    }
}


const register = async (req,res)=>{
    try{
        // console.log(req.body)
        const {username,email,phone,password} = req.body

        const userExist = await User.findOne({email})

        if (userExist) {
            return res.status(400).json({message:'email alrady exist'})
        }


        // const saltRound = 10;
        // const hash_password=await bcrypt.hash(password,saltRound)

        const userCreated = await User.create({username,email,phone,password})

        res.status(201).json({msssg:userCreated, token: await userCreated.generateToken(),userId:userCreated._id.toString()})
    } catch(err){
        res.status(500).send({msg:"pagen not found"})
        // console.log(err)
    }
}




const login = async (req,res)=>{
    try {
        const {email,password}=req.body
        const userExist = await User.findOne({email})
        if (!userExist) {
            return res.status(400).json({msg:"invalid Credentials"})
        }

        // const user = await bcrypt.compare(password, userExist.password)
        const user = await userExist.comparepasword(password)
        


        if (user) {
            res.status(201).json({msg:"login success", token: await userExist.generateToken(),userId:userExist._id.toString()})
        }
        else{
            res.status(401).json({msg:"invalid email or password"})
        }
    } catch (error) {
        // res.status(500).send({msg:"internal server error"})
        next(error)
    }
}

//to sent user data
const user = async (req,res)=>{
    try {
        const userData = req.user
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`error from user route ${error}`)
    }
}

module.exports = {home, register ,login,user}