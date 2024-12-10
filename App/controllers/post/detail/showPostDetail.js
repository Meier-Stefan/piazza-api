import { showIfActive } from "#controllers/helpers/showIfActive.js";
import { Post } from "#models/Post.js";

const showPostDetail = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findOne({ _id: postId });
    const postToDisplay = showIfActive(post);
    res.send(postToDisplay);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { showPostDetail };
