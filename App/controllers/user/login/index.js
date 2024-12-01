import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "#models/User.js";
import { loginValidation } from "./loginValidation.js";

const userLoginController = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ message: "User does not exist" });
  }
  const passwordIsValid = await bycrypt.compare(
    req.body.password,
    user.password,
  );
  if (!passwordIsValid) {
    return res.status(400).send({ message: "Invalid Password" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.header("auth-token", token).send({ "auth-token": token });
};

export { userLoginController };
