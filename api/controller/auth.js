import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";

import { User } from "../models/user.js";
import { errorHandler } from "../utils/error.js";

export const postSignUp  = async (req,res,next)=>{
    const {userName,email,password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = new User({userName : userName,email : email,password : hashPassword})
        await newUser.save();
    res.status(201).json({
        message  : "user created succcessfully",
        user  : newUser
    })        
    } catch (error) {
        next(error);
    }
}

export const postLogin  = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email : email})  
        if(!user) {
            return next(errorHandler(404, "User Not found"))
        }    
        
        const isMatched = await bcrypt.compare(password,user.password)
        if(!isMatched){
            return next(errorHandler(401, "Invalid Email or Password"))
        }
        const {password : hashPassword, ...userDetails} = user._doc;
        const token = Jwt.sign({id : user._id},process.env.JWT_SECRETE);
        res.cookie("access_token",token,{httpOnly : true, secure : false })
        .status(200).json({
            success  : true,
            user : userDetails,
            token : token
        })
    } catch (error) {
        next(error);
    }
}