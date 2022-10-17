"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
var mongoose_1 = require("mongoose");
exports.User = new mongoose_1.Schema({
    username: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    status: [{ type: String, ref: "Status" }],
    roles: [{ type: String, ref: "Role" }],
});
exports.UserModel = (0, mongoose_1.model)("User", exports.User);
//# sourceMappingURL=User.js.map