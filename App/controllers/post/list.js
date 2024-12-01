import { arePostsActive } from "#controllers/helpers/arePostsActive.js";
import { Post } from "#models/Post.js";

const postListController = async (req, res) => {
  try {
    const postsToGet = await Post.find().limit(15).lean();
    const postsToDisplay = arePostsActive(postsToGet);
    res.send(postsToDisplay);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { postListController };
