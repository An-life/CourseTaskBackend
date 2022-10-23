"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    status: { type: String, default: "active" },
    role: { type: String, default: "user" },
    activationLink: { type: String },
    collections: [
        {
            collectionId: { type: String },
            title: { type: String },
            description: { type: String },
            image: { type: String },
            items: [
                {
                    itemId: { type: String },
                    title: { type: String },
                    description: { type: String },
                    options: [{ title: String, value: String || Number || Boolean }],
                    likes: [{ value: { type: String } }],
                    tags: [{ type: String, ref: "Tag" }],
                },
            ],
            itemOptions: [{ title: String, dataType: String }],
            topic: [{ type: String, ref: "Topic" }],
        },
    ],
});
exports.User = (0, mongoose_1.model)("User", exports.UserSchema);
//# sourceMappingURL=user.js.map