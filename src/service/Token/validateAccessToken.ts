import jwt from "jsonwebtoken";

export const ValidateAccessTokenService = (token: string) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    return userData;
  } catch (e) {
    return null;
  }
};
