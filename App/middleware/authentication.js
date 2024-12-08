import jwt from "jsonwebtoken";
import { User } from "#models/User.js";

const isAuthenticated = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ message: "Please log in." });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken._id;
    const user = await User.findOne({ _id: userId }).select("username").lean();
    const userName = user.username;

    req.body.userId = userId;
    req.body.userName = userName;

    next();
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export { isAuthenticated };
