import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ message: "Acess denied" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export { isAuthenticated };
