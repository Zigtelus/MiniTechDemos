"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const http_1 = require("http");
const abstracts_1 = require("../../types/abstracts");
const _decorators_1 = require("@decorators");
const user_service_1 = require("./user.service");
;
let UsersController = class UsersController extends abstracts_1.AUsers {
    constructor(req, res) {
        super(req, res);
        this.userService = new user_service_1.UserService();
        this.postUser(req, res);
    }
    ;
    getUser() {
        return this.userService.getUser();
        // return {
        // 	statusCode: 200,
        // 	setHeader: [
        // 		['Content-Type', 'text/plain']
        // 	],
        // 	end: {
        // 	  statusCode: 200,
        // 	  setHeader: [
        // 		  ['Content-Type', 'text/plain']
        // 	  ],
        // 	}
        // };
    }
    ;
    postUser(req, res) {
        console.log('#####');
        // console.log(req)
        console.log('#####');
        // return this.userService.postUser(req.body)
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: 'put User'
        };
    }
    ;
    answer() {
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: 'this users'
        };
    }
    ;
};
exports.UsersController = UsersController;
exports.UsersController = UsersController = __decorate([
    (0, _decorators_1.Controller)(),
    __metadata("design:paramtypes", [Request,
        http_1.ServerResponse])
], UsersController);
;
//# sourceMappingURL=users.controller.js.map