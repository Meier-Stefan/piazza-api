import { Post } from "#models/Post.js";

const topicDetailController = async (req, res) => {
  const topicId = req.params.id;
  try {
    const postsToGet = await Post.find({ topic: { $in: topicId } });
    res.send(postsToGet);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { topicDetailController };
