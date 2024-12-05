import moment from "moment";

const showIfActive = (posts) => {
  const postsWithActiveProperty = posts.map((post) => {
    const { expirationTime, date } = post;
    const ageInMinutes = moment().diff(moment(date), "minutes");

    if (ageInMinutes > expirationTime) {
      post.active = false;

      return post;
    }

    post.active = true;
    return post;
  });
  return postsWithActiveProperty;
};

export { showIfActive };
