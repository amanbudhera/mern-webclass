
const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern-admin"
const  URI = process.env.MONGODB_URI

// mongoose.connect(URI)

const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.error("conection fail")
        process.exit(0)
    }
}

module.exports = connectDb