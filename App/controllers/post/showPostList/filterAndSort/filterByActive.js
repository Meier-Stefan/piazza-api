import { showIfActive } from "#controllers/helpers/showIfActive.js";
import { Post } from "#models/Post.js";

const filterByActive = async ({ filters, sort }) => {
  const statusToFilter = filters.active;
  delete filters.active;

  const postsToGet = await Post.find(filters).sort(sort).limit(15).lean();
  const postsByActive = showIfActive(postsToGet).filter(
    (post) => post.active === statusToFilter,
  );
  return postsByActive;
};

export { filterByActive };
