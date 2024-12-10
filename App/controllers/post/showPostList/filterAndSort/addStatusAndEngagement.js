import { showIfActive } from "#controllers/helpers/showIfActive.js";

export const addStatusAndEngagement = (posts) => {
  const statusAdded = showIfActive(posts);
  const statusAndEngagementAdded = statusAdded.map((post) => {
    post.engagement = post.likes.length + post.dislikes.length;
    return post;
  });
  return statusAndEngagementAdded;
};
