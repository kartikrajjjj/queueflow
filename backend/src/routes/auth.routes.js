import { Router } from "express";
import { signUp, login } from "../controllers/auth.controller.js";

const userRouter = Router();
userRouter.post("/signup",signUp);
userRouter.post("/login",login);

export default userRouter;