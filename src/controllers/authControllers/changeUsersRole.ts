import { Response, Request } from "express";

import { ChangeUsersRoleService } from "./../../service/Auth/changeUsersRole";

export const ChangeUsersRole = async (req: Request, res: Response, next) => {
  try {
    const { users, role } = req.body;
    const usersData = await ChangeUsersRoleService(users, role);
    return res.json(usersData);
  } catch (e) {
    next(e);
  }
};
