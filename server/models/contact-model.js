const {Schema,model} = require("mongoose")


const contactSchema = new Schema({
    username:{
        type:String,
        requied:true
    },
    email:{
        type:String,
        requied:true
    },
    message:{
        type:String,
        requied:true
    }
})

const Contact = new model('Contact',contactSchema)

module.exports = Contact