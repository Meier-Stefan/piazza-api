import express from "express";
import * as uc from "#controllers/user/index.js";

const userRouter = express.Router();

userRouter.get("/", uc.userLoginController);
userRouter.post("/registration", uc.userRegistrationController);
userRouter.get("/:id", uc.userProfileController);

export { userRouter };
