import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique  : true
    },
    password : {
        type : String,
        required : true
    },
    profilePicture : {
        type : String,
        default : "https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
    }
},{timestamps : true});

export const User  = mongoose.model("User",userSchema);

