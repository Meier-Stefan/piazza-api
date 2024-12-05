import { Post } from "#models/Post.js";

const postDetailController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findOne({ _id: postId });
    res.send(post);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { postDetailController };
