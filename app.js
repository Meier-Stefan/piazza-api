import express from "express";
import { connect } from "mongoose";
import { config } from "dotenv";

import { postRouter } from "#routes/post/index.js";
import { topicRouter } from "#routes/topic/index.js";
import { userRouter } from "#routes/user/index.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const uri = process.env.MONGODB_URI;

const main = async () => {
  console.log(`Connecting to DB`);
  await connect(uri);
  console.log(`Connected to DB`);
};

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/post", postRouter);
app.use("/topic", topicRouter);
app.use("/user", userRouter);

main().catch((error) => console.log(error));

app.listen(3000);
