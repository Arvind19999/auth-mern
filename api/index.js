import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";

// import { User } from "./models/user.js";
import userRoutes   from "./routes/user.js"
import userAuthRoutes from "./routes/auth.js"

dotenv.config();


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
  };

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
// app.use(cookieParser());

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

app.use("/api/auth",userAuthRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const errorMessage = err.message || "Internal Serve Error"

    return res.status(statusCode).json({
        success : false,
        errorMessage : errorMessage,
        statusCode : statusCode
    })
})