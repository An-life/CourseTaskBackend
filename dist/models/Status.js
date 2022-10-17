"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModel = exports.Status = void 0;
var mongoose_1 = require("mongoose");
exports.Status = new mongoose_1.Schema({
    value: { type: String, unique: true, default: "active" },
});
exports.StatusModel = (0, mongoose_1.model)("Status", exports.Status);
//# sourceMappingURL=Status.js.map