import { Post } from "#models/Post.js";

const reactToPost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  const { reaction } = req.body;

  const post = await Post.findById(postId);
  const userIsAuthor = post.authorId.toString() === userId;

  async function reactToPost({ reaction, postId, userId }) {
    const postToEngageWith = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { [reaction]: userId },
      },
      { new: true },
    );
    return { postToEngageWith };
  }

  try {
    if (userIsAuthor) {
      return res.send("you can not like your own post ;)");
    }
    const { postToEngageWith } = await reactToPost({
      reaction,
      postId,
      userId,
    });
    res.send(postToEngageWith);
  } catch (err) {
    console.error("Error adding comment:", err);
    res.send("something went wrong :(");
  }
};

export { reactToPost };
