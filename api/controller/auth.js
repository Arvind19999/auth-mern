import bcrypt from "bcrypt";

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
        // res.status(500).json({
        //     message  : "something went wrong",
        //     Error : error.message
        // })  
    }

}