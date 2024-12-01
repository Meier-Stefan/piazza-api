import { Schema, model } from "mongoose";

const TopicSchema = Schema({
  title: { type: String, required: true, min: 3, max: 256 },
  posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
});

const Topic = model("posts", TopicSchema);

export { Topic };
