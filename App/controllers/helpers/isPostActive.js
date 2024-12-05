import moment from "moment";

const isPostsActive = (post) => {
  const { expirationTime, date } = post;
  const ageInMinutes = moment().diff(moment(date), "minutes");

  if (ageInMinutes > expirationTime) {
    return false;
  }
  return true;
};

export { isPostsActive };
