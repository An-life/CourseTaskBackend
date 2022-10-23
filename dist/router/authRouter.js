"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var getUsers_1 = require("../controllers/authControllers/getUsers");
var login_1 = require("../controllers/authControllers/login");
var logout_1 = require("../controllers/authControllers/logout");
var refresh_1 = require("../controllers/authControllers/refresh");
var registration_1 = require("../controllers/authControllers/registration");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/registration", (0, express_validator_1.body)("name").isLength({ min: 3, max: 32 }), (0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("password").isLength({ min: 3, max: 32 }), registration_1.Registration);
exports.authRouter.post("/login", login_1.Login);
exports.authRouter.post("/logout", logout_1.Logout);
exports.authRouter.get("/refresh", refresh_1.Refresh);
exports.authRouter.get("/users", getUsers_1.GetUsers);
//# sourceMappingURL=authRouter.js.map