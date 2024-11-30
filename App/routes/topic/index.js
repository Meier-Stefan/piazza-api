import express from "express";
import * as tc from "#controllers/topic/index.js";

const topicRouter = express.Router();

topicRouter.get("/", tc.topicListController);
topicRouter.get("/:id", tc.topicDetailController);

export { topicRouter };
