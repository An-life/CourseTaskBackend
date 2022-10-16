import { Schema, model } from "mongoose";

interface IRole {
  value: string;
}

export const Role = new Schema<IRole>({
  value: { type: String, unique: true, default: "USER" },
});

export const RoleModel = model<IRole>("Role", Role);
