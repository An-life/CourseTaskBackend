"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var authControllers_1 = require("./authControllers");
var express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/registration", authControllers_1.RegistrationController);
exports.authRouter.post("/login", authControllers_1.LoginController);
exports.authRouter.get("/users", authControllers_1.GetUsersController);
//# sourceMappingURL=authRouter.js.map