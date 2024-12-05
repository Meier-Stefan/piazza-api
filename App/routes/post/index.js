import express from "express";
import * as pc from "#controllers/post/index.js";
import { isAuthenticated } from "#middleware/authentication.js";

const postRouter = express.Router();

postRouter.get("/", isAuthenticated, pc.showPostList);
postRouter.post("/new", isAuthenticated, pc.createPostController);
postRouter.get("/:id", isAuthenticated, pc.showPostDetail);
postRouter.post("/:id/comment", isAuthenticated, pc.commentOnPost);
postRouter.post("/:id/react", isAuthenticated, pc.reactToPost);

export { postRouter };
