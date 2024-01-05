import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

// import { User } from "./models/user.js";
import userRoutes   from "./routes/user.js"

dotenv.config();
const app = express();


// const user = new User({userName : "XYZ", email : "xyz.arvind99@gmail.com", password : "kffdskjfhdkjf" })
// user.save()
// .then(usr=>{
//     console.log(usr)
// })
// .catch(err=>{
//     console.log(err)
// })
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

// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message  : "API is working properly"
//     })
// })

app.use("/api/user",userRoutes);