import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

// import { User } from "./models/user.js";
import userRoutes   from "./routes/user.js"
import userAuthRoutes from "./routes/auth.js"

dotenv.config();
const app = express();
app.use(express.json());


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

app.use("/api/user",userRoutes);

app.use("/api/user",userAuthRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const errorMessage = err.message || "Internal Serve Error"

    return res.status(statusCode).json({
        success : false,
        errorMessage : errorMessage,
        statusCode : statusCode
    })
})