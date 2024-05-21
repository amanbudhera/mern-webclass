const adminMiddleware = async (req,res,next)=>{
    try {
        console.log(req.user)
        const adminRole = req.user.isAdmin
        if (!adminRole) {
            return res
            .status(403)
            .json({message:"Access denied, User is not Admin"})
        }
        // res.status(200).json({msg:req.user.isAdmin})
        next()
    } catch (error) {
        console.error('no way bro')
        next()
        // next(error)
    }
}

module.exports = adminMiddleware