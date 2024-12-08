export const sortByInterest = (posts) => {
  const sortedByInterest = posts.sort((a, b) => b.engagement - a.engagement);
  return sortedByInterest;
};
