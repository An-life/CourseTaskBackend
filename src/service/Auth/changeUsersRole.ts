import { ApiError } from "../../exceptions/apiError";
import { User } from "../../models/user";

export const ChangeUsersRoleService = async (users: string[], role: string) => {
  if (users && role) {
    const updatedUsersData = await User.updateMany(
      { _id: { $in: users } },
      { role },
      { multi: true }
    );
    return updatedUsersData;
  }
  throw ApiError.BadRequest("Users data is not correct");
};
