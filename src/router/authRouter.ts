import express from "express";
import { body } from "express-validator";

import { GetUsers } from "../controllers/authControllers/getUsers";
import { Login } from "../controllers/authControllers/login";
import { Logout } from "../controllers/authControllers/logout";
import { Refresh } from "../controllers/authControllers/refresh";
import { Registration } from "../controllers/authControllers/registration";

export const authRouter = express.Router();

authRouter.post(
  "/registration",
  body("name").isLength({ min: 3, max: 32 }),
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  Registration
);
authRouter.post("/login", Login);
authRouter.post("/logout", Logout);
authRouter.get("/refresh", Refresh);
authRouter.get("/users", GetUsers);
