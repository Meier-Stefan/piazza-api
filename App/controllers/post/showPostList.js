import { showIfActive } from "#controllers/helpers/showIfActive.js";
import { Post } from "#models/Post.js";

const showPostList = async (req, res) => {
  try {
    const postsToGet = await Post.find().limit(15).lean();
    const postsToDisplay = showIfActive(postsToGet);
    res.send(postsToDisplay);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { showPostList };
