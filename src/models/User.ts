import { Schema, model } from "mongoose";

export interface IOption {
  title: string;
  value: string | number | boolean;
}

export interface IItem {
  title: string;
  description: string;
  likes: string[];
  tags: string[];
  options: IOption[];
}

export interface IItemOption {
  title: string;
  dataType: string;
}

export interface ICollection {
  title: string;
  description: string;
  image: string;
  items: IItem[];
  itemOptions: IItemOption[];
  topic: string[];
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  status: "active" | "blocked";
  role: "user" | "admin";
  activationLink: string;
  collections: ICollection[];
}

export const UserSchema = new Schema<IUser>({
  name: { type: String, unique: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  status: { type: String, default: "active" },
  role: { type: String, default: "user" },
  activationLink: { type: String },
  collections: [
    {
      collectionId: { type: String },
      title: { type: String },
      description: { type: String },
      image: { type: String },
      items: [
        {
          itemId: { type: String },
          title: { type: String },
          description: { type: String },
          options: [{ title: String, value: String || Number || Boolean }],
          likes: [{ value: { type: String } }],
          tags: [{ type: String, ref: "Tag" }],
        },
      ],
      itemOptions: [{ title: String, dataType: String }],
      topic: [{ type: String, ref: "Topic" }],
    },
  ],
});

export const User = model<IUser>("User", UserSchema);
