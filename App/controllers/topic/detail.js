import { Post } from "#models/Post.js";
import { arePostsActive } from "#controllers/helpers/arePostsActive.js";

const topicDetailController = async (req, res) => {
  const topicId = req.params.id;
  try {
    const postsToGet = await Post.find({ topic: { $in: topicId } });
    const postsToDisplay = arePostsActive(postsToGet);
    res.send(postsToDisplay);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { topicDetailController };
