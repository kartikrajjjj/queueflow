import { Router } from "express";
import { signUp, login, sendEmail } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const userRouter = Router();
userRouter.post("/signup",signUp);
userRouter.post("/login",login);
userRouter.post("/send-mail", sendEmail);

userRouter.get("/test",verifyToken,(req,res)=>{
    res.json({
        message: "Middleware passed",
        user: req.user
    });
});

export default userRouter;