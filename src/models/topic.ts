import { Schema, model } from "mongoose";

import { ITag } from "./tag";

export const TopicSchema = new Schema<ITag>({
  value: { type: String, unique: true },
});

export const Topic = model<ITag>("Topic", TopicSchema);
