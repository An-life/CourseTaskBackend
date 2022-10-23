import bcrypt from "bcryptjs";

import { ApiError } from "../../exceptions/apiError";
import { GenerateTokensService } from "../Token/generateTokens";
import { SaveTokenService } from "../Token/saveToken";
import { User } from "../../models/user1";
import { UserDto } from "../../dtos/dtos";

export const RegistrationService = async (
  name: string,
  email: string,
  enteredPassword: string
) => {
  const candidate = await User.findOne({ email });

  if (candidate) {
    throw ApiError.BadRequest(`User with such address ${email} already exist`);
  }

  const password = await bcrypt.hash(enteredPassword, 3);
  const user = await User.create({ name, email, password });
  const userDto = new UserDto(user);
  const tokens = GenerateTokensService({
    ...userDto,
    status: "active",
    role: "user",
  });

  await SaveTokenService(userDto.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userDto,
  };
};
