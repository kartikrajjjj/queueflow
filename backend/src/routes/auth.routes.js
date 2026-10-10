import { Router } from "express";
import { signUp, login, sendEmail, logout } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { forgotPassword } from "../controllers/auth.controller.js";
import { changePassword } from "../controllers/auth.controller.js";

import { verifyTokenController } from "../controllers/auth.controller.js";

const userRouter = Router();
userRouter.post("/signup",signUp);
userRouter.post("/login",login);
userRouter.post("/logout",logout);
userRouter.post("/send-mail", sendEmail);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/verify-token",verifyToken, verifyTokenController);
userRouter.put("/change-password", verifyToken,changePassword)

userRouter.get("/test",verifyToken,(req,res)=>{
    res.json({
        message: "Middleware passed",
        user: req.user
    });
});

export default userRouter;