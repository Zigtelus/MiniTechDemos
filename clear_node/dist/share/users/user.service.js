"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    getUser() {
        return {
            statusCode: 200,
            setHeader: [
                ['Content-Type', 'text/plain']
            ],
            end: {
                statusCode: 200,
                setHeader: [
                    ['Content-Type', 'text/plain']
                ],
            }
        };
    }
    ;
    postUser(body) {
        return {
            statusCode: 200,
            setHeader: ['Content-Type', 'text/plain'],
            end: body
        };
    }
    ;
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map