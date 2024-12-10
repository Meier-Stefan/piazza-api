import { showPostList } from "../post/showPostList/index.js";

const topicDetailController = (req, res) => {
  const topicId = req.params.id;
  const { filters } = req.body;
  req.body.filters = { ...filters, topic: { $in: topicId } };
  showPostList(req, res);
};

export { topicDetailController };
