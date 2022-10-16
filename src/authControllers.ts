import { UserModel } from "./models/User";
import { RoleModel } from "./models/Role";
import { StatusModel } from "./models/Status";
import jwt from "jsonwebtoken";
import { secret } from "./config";
import { Types } from "mongoose";
import bcrypt from "bcryptjs";
import { Response, Request } from "express";

const generateAccessToken = (id: Types.ObjectId, roles: string[]) => {
  const payload = {
    id,
    roles,
  };

  return jwt.sign(payload, secret.secret, { expiresIn: "24" });
};

export const RegistrationController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "User with the same name already exists" });
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await RoleModel.findOne({ value: "USER" });
    const userStatus = await StatusModel.findOne({ value: "active" });
    const user = new UserModel({
      username,
      email,
      password: hashPassword,
      status: [userStatus.value],
      roles: [userRole.value],
    });
    await user.save();
    return res.json({ message: "User added" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Registration error" });
  }
};

export const LoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: `User ${email} is not found` });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Password is not correct" });
    }
    const token = generateAccessToken(user._id, user.roles);
    return res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Login error" });
  }
};

export const GetUsersController = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Data error" });
  }
};
