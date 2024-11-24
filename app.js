import express from "express";
import { postRouter } from "#routes/post/index.js";
import { topicRouter } from "#routes/topic/index.js";
import { userRouter } from "#routes/user/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/post", postRouter);
app.use("/topic", topicRouter);
app.use("/user", userRouter);

app.listen(3000);
