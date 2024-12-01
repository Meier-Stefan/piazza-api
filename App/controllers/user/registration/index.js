import bycrypt from "bcryptjs";
import { User } from "#models/User.js";
import { registerValidation } from "./registerValidation.js";

const userRegistrationController = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(400).send({ message: "User already exists" });
  }

  const hashedPassword = await bycrypt.hash(req.body.password, 5);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export { userRegistrationController };
