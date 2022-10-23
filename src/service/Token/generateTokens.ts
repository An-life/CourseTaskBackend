import jwt from "jsonwebtoken";

export const GenerateTokensService = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "30 min",
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30 d",
  });

  return {
    accessToken,
    refreshToken,
  };
};
