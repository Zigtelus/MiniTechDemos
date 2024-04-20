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
exports.Server = void 0;
const http_1 = require("http");
const share_1 = require("./share");
const _decorators_1 = require("@decorators");
const { createServer } = require('http');
const mysql = require('mysql');
class AServer {
}
;
class Server {
    constructor() {
        this.hostname = '127.0.0.1';
        this.port = 3000;
        this.start();
        this.handleRequest = this.handleRequest.bind(this);
    }
    ;
    start() {
        const server = createServer(this.handleRequest);
        // request - это специальное событие в Node.js, которое генерируется при каждом входящем HTTP-запросе к серверу
        server.on('request', this.handleRequest);
        server.listen(this.port, () => {
            console.log(`Server running at http://${this.hostname}:${this.port}/`);
        });
    }
    ;
    handleRequest(req, res) {
        // console.log(req.body)
        // let body;
        req.on('data', (chunk) => {
            // body += chunk;
            console.log(chunk);
        });
        const rootPoint = req.url.split('/')[1];
        switch (rootPoint) {
            case 'books':
                return new share_1.BooksController(req, res);
            case 'users':
                return new share_1.UsersController(req, res);
        }
        ;
    }
    ;
}
exports.Server = Server;
__decorate([
    (0, _decorators_1.DefaultResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, http_1.ServerResponse]),
    __metadata("design:returntype", void 0)
], Server.prototype, "handleRequest", null);
//# sourceMappingURL=server.js.map