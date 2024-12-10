export const filterByStatus = ({ posts, statusFilter }) => {
  const postsByActive = posts.filter((post) => post.active === statusFilter);
  return postsByActive;
};
