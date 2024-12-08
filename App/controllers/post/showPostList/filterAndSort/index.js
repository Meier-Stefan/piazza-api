import { Post } from "#models/Post.js";
import { addStatusAndEngagement } from "./addStatusAndEngagement.js";
import { filterByStatus } from "./filterByStatus.js";
import { sortByInterest } from "./sortByInterest.js";

const filterAndSort = async ({ filters, sort }) => {
  const statusFilter = filters.active;
  delete filters.active;

  const filteredPosts =
    sort === "interest"
      ? await Post.find(filters).limit(15).lean()
      : await Post.find(filters).sort(sort).limit(15).lean();

  const enhancedPosts = addStatusAndEngagement(filteredPosts);

  const postsToDisplay =
    sort === "interest" ? sortByInterest(enhancedPosts) : enhancedPosts;

  if (statusFilter !== undefined) {
    return filterByStatus({
      posts: postsToDisplay,
      statusFilter,
    });
  }

  return postsToDisplay;
};

export { filterAndSort };
