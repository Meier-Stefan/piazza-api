import { Post } from "#models/Post.js";

const postListController = async (req, res) => {
  try {
    const postsToGet = await Post.find().limit(15);
    res.send(postsToGet);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { postListController };
