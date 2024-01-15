import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userAuthRouter from "./router/userAuth.js"
import cors from "cors"
import commentAuthRouter from "./router/commentAuth.js"
import videoAuthRouter from "./router/videoAuth.js"
import AuthRouter from "./router/authRouter.js"
import cookieParser from "cookie-parser"
// import { ConnectionCheckOutFailedEvent } from "mongodb"

dotenv.config()
const app = express()

const connect = ()=>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("connect to DB");
    })
    .catch((err)=>{
        throw err
    })
}
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/users",userAuthRouter)
app.use("/api/comments",commentAuthRouter)
app.use("/api/videos",videoAuthRouter)
app.use("/api/auth",AuthRouter)
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something  went wrong";
    return res.status(status).json({
        success : false,
        status,
        message,
    });
})

app.listen(8800,()=>{
    connect()
    console.log("connect ");
})