"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.Role = void 0;
var mongoose_1 = require("mongoose");
exports.Role = new mongoose_1.Schema({
    value: { type: String, unique: true, default: "USER" },
});
exports.RoleModel = (0, mongoose_1.model)("Role", exports.Role);
//# sourceMappingURL=Role.js.map