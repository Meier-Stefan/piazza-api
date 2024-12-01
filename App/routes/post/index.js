import express from "express";
import * as pc from "#controllers/post/index.js";
import { isAuthenticated } from "#middleware/authentication.js";

const postRouter = express.Router();

postRouter.get("/", isAuthenticated, pc.postListController);
postRouter.post("/new", isAuthenticated, pc.createPostController);
postRouter.get("/:id", isAuthenticated, pc.postDetailController);

export { postRouter };
