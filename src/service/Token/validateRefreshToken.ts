import jwt from "jsonwebtoken";

export const ValidateRefreshTokenService = (token: string) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    return userData;
  } catch (e) {
    return null;
  }
};
