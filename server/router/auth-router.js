const express= require('express')
const router = express.Router()
const authController = require('../controllers/auth-controllers')
const {signupSchema,loginSchema}  = require('../validators/auth-validators')
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require('../middlewares/auth-middleware')



router.get("/",authController.home)
// router.route('/').get((req,res)=>{
//     res.status(200).send("hello world using rout")
// })
// router.route('/').get(home)

router.post("/register",validate(signupSchema), authController.register)

router.post("/login",validate(loginSchema),authController.login)

router.route('/user').get(authMiddleware, authController.user)

module.exports = router