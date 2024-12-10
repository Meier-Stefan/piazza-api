import { showIfActive } from "#controllers/helpers/showIfActive.js";
import { Post } from "#models/Post.js";
import { filterAndSort } from "./filterAndSort/index.js";

const showPostList = async (req, res) => {
  const { filters, sort } = req.body;

  try {
    if (filters || sort) {
      const filteredAndSortedPosts = await filterAndSort({
        filters,
        sort,
      });
      const postsToDisplay = showIfActive(filteredAndSortedPosts);
      return res.send(postsToDisplay);
    }
    const postsToGet = await Post.find().limit(15).lean();
    const postsToDisplay = showIfActive(postsToGet);
    return res.send(postsToDisplay);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { showPostList };
