import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = 3000;

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: process.env.DOMAIN,
    credentials: true
}));

app.use("/api/auth",userRouter);

app.get("/",(req,res)=>{
    res.send("Hello from server");
})

app.listen(PORT,()=>{
    console.log("Server running on: http://localhost:3000/");
})

mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
    });