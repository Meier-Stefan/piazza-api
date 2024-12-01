import express from "express";
import * as tc from "#controllers/topic/index.js";
import { isAuthenticated } from "#middleware/authentication.js";

const topicRouter = express.Router();

topicRouter.get("/", isAuthenticated, tc.topicListController);
topicRouter.get("/:id", isAuthenticated, tc.topicDetailController);

export { topicRouter };
