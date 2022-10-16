import { Schema, model } from "mongoose";

interface IStatus {
  value: string;
}

export const Status = new Schema<IStatus>({
  value: { type: String, unique: true, default: "active" },
});

export const StatusModel = model<IStatus>("Status", Status);
