import { Post } from "#models/Post.js";

const sortByInterest = async ({ filters }) => {
  const postsToGet = await Post.find(filters).limit(15).lean();

  const postsWithEngagement = postsToGet.map((post) => {
    post.engagement = post.likes.length + post.dislikes.length;
    return post;
  });

  const sortedArray = postsWithEngagement.sort(
    (a, b) => b.engagement - a.engagement,
  );

  return sortedArray;
};

export { sortByInterest };
