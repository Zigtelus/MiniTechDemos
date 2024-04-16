"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const abstracts_1 = require("../../types/abstracts");
class Books extends abstracts_1.ABooks {
    // constructor(req: Request, res: ServerResponse) {
    // 	this.start(req, res)
    // };
    start(req, res) {
        this.answer(res);
        return this.method(req);
    }
    ;
    answer(res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('this books');
        return 'this books';
    }
    ;
    method(req) {
        req.method;
    }
    ;
}
exports.Books = Books;
;
//# sourceMappingURL=books.js.map