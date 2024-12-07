import { Post } from "#models/Post.js";
import { filterByActive } from "./filterByActive.js";
import { sortByInterest } from "./sortByInterest.js";

const filterAndSort = async ({ filters, sort }) => {
  if (sort === "interest") {
    const postsByInterest = await sortByInterest({ filters });
    return postsByInterest;
  }
  if ("active" in filters) {
    const postsByActive = await filterByActive({ filters, sort });
    return postsByActive;
  }
  const postsToGet = await Post.find(filters).sort(sort).limit(15).lean();
  return postsToGet;
};

export { filterAndSort };
