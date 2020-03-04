"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User;
}());
exports.User = User;
