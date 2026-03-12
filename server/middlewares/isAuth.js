import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
const isAuth=async (req,res,next)=>{
try {
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({message:"token not found, please login"})
    }
    let decoded
    try {
        decoded=jwt.verify(token,process.env.JWT_SECRET)
    } catch(jwtError) {
        return res.status(401).json({message:"invalid or expired token, please login again"})
    }
    const user=await User.findById(decoded.id)
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
    req.user=user
    next()
} catch (error) {
    return res.status(500).json({message:"auth error: "+error.message})
}
}
 
export default isAuth