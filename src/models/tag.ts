import { Schema, model } from "mongoose";

export interface ITag {
  value: string;
}

export const TagSchema = new Schema<ITag>({
  value: { type: String, unique: true },
});

export const Tag = model<ITag>("Tag", TagSchema);
