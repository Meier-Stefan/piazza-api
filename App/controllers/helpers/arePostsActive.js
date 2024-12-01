import moment from "moment";

const arePostsActive = (posts) => {
  const postsWithActiveProperty = posts.map((post) => {
    const ageInMinutes = moment().diff(moment(post.date), "minutes");

    if (ageInMinutes > 5) {
      post.active = false;

      return post;
    }

    post.active = true;
    return post;
  });
  return postsWithActiveProperty;
};

export { arePostsActive };
