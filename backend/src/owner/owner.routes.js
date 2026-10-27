import { Router } from "express";
import {
  createBusiness,
  ownerLogin,
  addService,
  verifyOwnerSession,
  getServices,
} from "./owner.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { checkOwner } from "./owner.controllers.js";
import { verifyOwnerToken } from "../middleware/owner.middleware.js";
import { deleteService } from "./owner.controllers.js";

const ownerRouter = Router();

ownerRouter.post("/create", verifyToken, createBusiness);
ownerRouter.post("/ownerlogin", verifyToken, ownerLogin);
ownerRouter.get("/status",verifyToken, checkOwner);
ownerRouter.get(
  "/services",
  verifyToken,
  verifyOwnerToken,
  getServices
);
ownerRouter.post("/add",verifyToken,verifyOwnerToken,addService);
ownerRouter.get(
  "/verify-session",
  verifyOwnerToken,
  verifyOwnerSession
);
ownerRouter.delete(
  "/services/:serviceId",
  verifyToken,
  verifyOwnerToken,
  deleteService
);

export default ownerRouter;