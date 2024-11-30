import express from "express";
import * as pc from "#controllers/post/index.js";

const postRouter = express.Router();

postRouter.get("/", pc.postListController);
postRouter.get("/:id", pc.postDetailController);

export { postRouter };
