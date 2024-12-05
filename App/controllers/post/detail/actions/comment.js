import { Post } from "#models/Post.js";

const commentOnPost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  const { text } = req.body;

  const newComment = {
    commentorId: userId,
    text: text,
  };

  console.log("update", newComment);
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comments: newComment },
      },
      { new: true },
    );
    res.send(updatedPost);
  } catch (err) {
    console.error("Error adding comment:", err);
  }
};
export { commentOnPost };
