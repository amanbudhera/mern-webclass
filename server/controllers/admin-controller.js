
const User = require('../models/user-model')
const Contact = require('../models/contact-model')


const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find({},{password:0})
        if (!users || users.length === 0) {
            return res.status(404).json({message:"no user found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        // console.log(first)
        next(error)
    }
}

const getAllContacts = async (req,res)=>{
    try {
        const contact = await Contact.find()
        console.log(contact)
        if (!contact || contact.length === 0) {
            return res.status(404).json({message:"no contact found"})
        }
        return res.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}

const deleteUserbyId = async (req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id:id})
        return res.status(200).json({message:'user Deleted Successfuly'})
    } catch (error) {
        next(error)
    }
}

const getUsersbyId = async (req,res)=>{
    try {
        const id = req.params.id
        const data =  await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}


const updateUserbyId = async (req,res)=>{
    try {
        const id = req.params.id
        const updateUserData = req.body

        const updateUser = await User.updateOne({_id:id},{$set:updateUserData})
        return res.status(200).json()
    } catch (error) {
        console.log(error)
    }
}

const deletecontactsbyId = async (req,res)=>{
    try {
        const id = req.params.id
        await Contact.deleteOne({_id:id})
        return res.status(200).json({msg:"delete contact data"})
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserbyId,getUsersbyId,updateUserbyId,deletecontactsbyId}