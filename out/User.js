"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.tasks = [];
    }
    User.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.prototype.setTask = function (task) {
        this.tasks.push(task);
    };
    User.prototype.getTasks = function () {
        return this.tasks;
    };
    return User;
}());
exports.User = User;
