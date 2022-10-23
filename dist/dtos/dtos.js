"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var UserDto = /** @class */ (function () {
    function UserDto(model) {
        this.id = model._id;
        this.role = model.role;
        this.status = model.status;
    }
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=dtos.js.map