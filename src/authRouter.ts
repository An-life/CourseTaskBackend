import {
  RegistrationController,
  LoginController,
  GetUsersController,
} from "./authControllers";
import express from "express";

export const authRouter = express.Router();

authRouter.post("/registration", RegistrationController);
authRouter.post("/login", LoginController);
authRouter.get("/users", GetUsersController);
