import express from "express";
import * as uc from "#controllers/user/index.js";
import { isAuthenticated } from "#middleware/authentication.js";

const userRouter = express.Router();

userRouter.post("/login", uc.userLoginController);
userRouter.post("/registration", uc.userRegistrationController);
userRouter.get("/:id", isAuthenticated, uc.userProfileController);

export { userRouter };
