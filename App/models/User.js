import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, min: 3, max: 256 },
  email: { type: String, required: true, min: 3, max: 256 },
  password: { type: String, required: true, min: 3, max: 1024 },
  date: { type: Date, default: Date.now },
});

const User = model("users", userSchema);

export { User };
