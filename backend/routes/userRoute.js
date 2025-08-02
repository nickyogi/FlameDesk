import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  updateProfile,
  updatePassword,
  googleLogin,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

// PUBLIC ROUTES
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/googleLogin", googleLogin);

// PRIVATE ROUTES #PROTECTED
userRouter.get("/me", authMiddleware, getCurrentUser);
userRouter.put("/profile", authMiddleware, updateProfile);
userRouter.put("/password", authMiddleware, updatePassword);

export default userRouter;
