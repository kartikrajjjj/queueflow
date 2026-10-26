import { Router } from "express";
import {
  createBusiness,
  ownerLogin,
  addService,
  verifyOwnerSession,
} from "./owner.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { checkOwner } from "./owner.controllers.js";
import { verifyOwnerToken } from "../middleware/owner.middleware.js";

const ownerRouter = Router();

ownerRouter.post("/create", verifyToken, createBusiness);
ownerRouter.post("/ownerlogin", verifyToken, ownerLogin);
ownerRouter.get("/status",verifyToken,verifyOwnerToken, checkOwner);
ownerRouter.post("/add",verifyToken,verifyOwnerToken,addService);
ownerRouter.get(
  "/verify-session",
  verifyOwnerToken,
  verifyOwnerSession
);

export default ownerRouter;