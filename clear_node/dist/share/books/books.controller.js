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
exports.BooksController = void 0;
const http_1 = require("http");
const abstracts_1 = require("../../types/abstracts");
const _decorators_1 = require("@decorators");
const fs = require('fs');
;
let BooksController = class BooksController extends abstracts_1.ABooks {
    constructor(req, res) {
        super(req, res);
    }
    ;
    getBooks() {
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: 'req.body'
        };
    }
    ;
    resolveBody(body) {
        console.log('avi resolveBody');
        fs.writeFile("./src/share/books/uuyr.zip", body, (err, data) => {
            if (err) {
                console.error('Ошибка чтения файла:', err);
                return;
            }
            ;
            console.log('Изображение успешно сохранено.');
        });
        return "3333";
    }
    ;
    resolveBodyMP3(body) {
        fs.writeFile("./src/share/books/uuyr.mp3", body, (err, data) => {
            if (err) {
                console.error('Ошибка чтения файла:', err);
                return;
            }
            ;
            console.log('Изображение успешно сохранено.');
        });
        return "3333";
    }
    ;
    resolveBodyFile(body) {
        const buf = Buffer.from(body, 'hex');
        fs.writeFile('image.png', buf, (err, data) => {
            if (err) {
                console.error('Ошибка чтения файла:', err);
                return false;
            }
            console.log('Изображение успешно сохранено.');
        });
        return true;
    }
    resolveBodyJson(body) {
        const buf = Buffer.from(body, 'hex');
        const JSONparse = JSON.parse(buf.toString());
        return buf.toString();
    }
    postBooks(req, res) {
        var _a;
        console.log('avi postBooks');
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: (_a = this.resolveBody(req.body)) !== null && _a !== void 0 ? _a : 'req.body'
        };
    }
    ;
    answer() {
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: 'this books'
        };
    }
    ;
};
exports.BooksController = BooksController;
exports.BooksController = BooksController = __decorate([
    (0, _decorators_1.Controller)(),
    __metadata("design:paramtypes", [Request, http_1.ServerResponse])
], BooksController);
;
//# sourceMappingURL=books.controller.js.map