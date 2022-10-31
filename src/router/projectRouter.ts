import express from "express";
import { body } from "express-validator";

import { AddCollection } from "../controllers/collectionControllers/addCollection";
import { ChangeUsersRole } from "../controllers/authControllers/changeUsersRole";
import { ChangeUsersStatus } from "../controllers/authControllers/changeUsersStatus";
import { DeleteUsers } from "../controllers/authControllers/deleteUsers";
import { GetMe } from "../controllers/authControllers/getMe";
import { GetTags } from "./../controllers/itemControllers/getTags";
import { GetTopics } from "./../controllers/collectionControllers/getTopics";
import { GetUsers } from "../controllers/authControllers/getUsers";
import { Login } from "../controllers/authControllers/login";
import { Logout } from "../controllers/authControllers/logout";
import { Refresh } from "../controllers/authControllers/refresh";
import { Registration } from "../controllers/authControllers/registration";

export const projectRouter = express.Router();

projectRouter.post(
  "/registration",
  body("name").isLength({ min: 3, max: 32 }),
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  Registration
);
projectRouter.post("/login", Login);
projectRouter.post("/logout", Logout);
projectRouter.post("/deleteUsers", DeleteUsers);
projectRouter.post("/changeUsersStatus", ChangeUsersStatus);
projectRouter.post("/changeUsersRole", ChangeUsersRole);
projectRouter.get("/refresh", Refresh);
projectRouter.get("/users", GetUsers);
projectRouter.get("/me", GetMe);
projectRouter.get("/topics", GetTopics);
projectRouter.get("/tags", GetTags);
projectRouter.post("/addCollection", AddCollection);
