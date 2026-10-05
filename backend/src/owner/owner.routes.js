import { Router } from "express";
import { createBusiness, ownerLogin } from "./owner.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const ownerRouter = Router();

ownerRouter.post("/create", verifyToken, createBusiness);
ownerRouter.post("/ownerlogin", verifyToken, ownerLogin);

export default ownerRouter;