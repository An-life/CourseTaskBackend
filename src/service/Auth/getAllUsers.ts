import { User } from "../../models/user1";

export const GetAllUsersService = async () => {
  const users = await User.find();

  const usersData = users.map(({ _id, name, email, status, role }) => {
    return {
      userId: _id,
      name,
      email,
      status,
      role,
    };
  });
  return usersData;
};
