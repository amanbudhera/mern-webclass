
require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-router')
const serviceRouter = require('./router/service-router')
const adminRouter = require('./router/admin-router')
const connectDb = require("./utils/db")
const errorMiddleware = require('./middlewares/error-middleware')



const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials:true
}
app.use(cors(corsOptions))



app.use(express.json())
//mount the Routeer
app.use('/api/auth',authRouter)
app.use('/api/form',contactRouter)
app.use('/api/data',serviceRouter)
app.use('/api/admin',adminRouter)
// app.get("/",(req,res)=>{
//     res.status(200).send("hello world")
// })

// app.get("/register",(req,res)=>{
//     res.status(200).send("hello, register yourslf here")
// })

app.use(errorMiddleware)

const PORT = process.env.PORT
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server runing at "+PORT)
    })
})
