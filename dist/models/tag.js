"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.TagSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TagSchema = new mongoose_1.Schema({
    value: { type: String, unique: true },
});
exports.Tag = (0, mongoose_1.model)("Tag", exports.TagSchema);
//# sourceMappingURL=tag.js.map