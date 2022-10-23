"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = exports.TopicSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TopicSchema = new mongoose_1.Schema({
    value: { type: String, unique: true },
});
exports.Topic = (0, mongoose_1.model)("Topic", exports.TopicSchema);
//# sourceMappingURL=topic.js.map