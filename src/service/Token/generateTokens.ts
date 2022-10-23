import jwt from "jsonwebtoken";

export const GenerateTokensService = (payload) => {
  const accessToken = jwt.sign(payload, "secret", {
    expiresIn: "30 min",
  });
  const refreshToken = jwt.sign(payload, "secret", {
    expiresIn: "30 d",
  });

  return {
    accessToken,
    refreshToken,
  };
};
