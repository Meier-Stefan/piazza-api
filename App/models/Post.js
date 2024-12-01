import { Schema, model } from "mongoose";

const PostSchema = Schema({
  title: { type: String, required: true, min: 3, max: 256 },
  text: { type: String, required: true, min: 3, max: 2048 },
  authorId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  topic: [{ type: Schema.Types.ObjectId, required: true, ref: "topics" }],
  expirationTime: { type: Number, required: true, min: 5 },
  comments: [
    {
      commentorId: { type: Schema.Types.ObjectId, ref: "users" },
      text: { type: String, required: true, min: 3, max: 1024 },
      date: { type: Date, default: Date.now },
    },
  ],
  likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: "users" }],
  date: { type: Date, default: Date.now },
});

const Post = model("posts", PostSchema);

export { Post };
