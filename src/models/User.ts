import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  status: string[];
  roles: string[];
}

export const User = new Schema<IUser>({
  username: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  status: [{ type: String, ref: "Status" }],
  roles: [{ type: String, ref: "Role" }],
});

export const UserModel = model<IUser>("User", User);
