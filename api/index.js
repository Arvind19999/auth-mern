import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Success fully connected to database")
})
.catch(err=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log("Your app is listing at port 3000!!!")
})