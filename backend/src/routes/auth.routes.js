import { Router } from "express";
import { signUp, login } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const userRouter = Router();
userRouter.post("/signup",signUp);
userRouter.post("/login",login);

userRouter.get("/test",verifyToken,(req,res)=>{
    res.json({
        message: "Middleware passed",
        user: req.user
    });
});

export default userRouter;