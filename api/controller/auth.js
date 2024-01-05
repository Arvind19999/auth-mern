import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";

import { User } from "../models/user.js";
import { errorHandler } from "../utils/error.js";
// import { JsonWebTokenError } from "jsonwebtoken";


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
        const token = Jwt.sign({id : user._id},process.env.JWT_SECRETE);
        const {password : hashPassword, ...userDetails} = user._doc
        res.cookie("token",token,{httpOnly : true,maxAge : 360000})
        .status(200).json({
            success  : true,
            user : userDetails,
            token : token
        })
        // res.json({token : token})
    } catch (error) {
        next(error);
    }
}