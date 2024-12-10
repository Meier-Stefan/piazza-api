import { Post } from "#models/Post.js";
import moment from "moment";

const isPostsActive = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findOne({ _id: postId });
  const { expirationTime, date } = post;

  const ageInMinutes = moment().diff(moment(date), "minutes");
  if (ageInMinutes > expirationTime) {
    return res.send("this post is no longer active");
  }
  next();
};

export { isPostsActive };
