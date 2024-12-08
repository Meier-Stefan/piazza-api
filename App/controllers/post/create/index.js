import { Post } from "#models/Post.js";
import { postValidation } from "./postValidation.js";

const createPostController = async (req, res) => {
  const { error } = postValidation(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  const postData = new Post({
    authorId: req.body.userId,
    authorName: req.body.userName,
    title: req.body.title,
    text: req.body.text,
    topic: req.body.topicId,
    expirationTime: req.body.expirationTime,
  });

  try {
    const postToSave = await postData.save();
    res.send(postToSave);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { createPostController };
