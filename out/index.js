"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user = new User_1.User();
user.firstName = 'Ripon';
user.lastName = 'Ghosh';
console.log(user.fullName());
