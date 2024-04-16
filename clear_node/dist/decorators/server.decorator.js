"use strict";
/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

    3) implements      - типипизация с указанными обязательными методами и переменными
    4) extends         - наследование методов и переменных

    5) protected       - метод доступен в подклассах
    6) private         - метод не доступен в подкласса (не наследуется)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultResponse = void 0;
class AServer {
}
;
class Server {
    Server() { }
    ;
    DefaultResponse() {
        return (target, key, descriptor) => {
            let originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const result = originalMethod.apply(this, args);
                const req = args[0];
                const res = args[1];
                if (req.url === '/') {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('There should be instructions here' + req.url);
                    return;
                }
                ;
                if (result === undefined) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(req.url);
                    return;
                }
                ;
            };
        };
    }
    ;
}
;
exports.DefaultResponse = (new Server).DefaultResponse;
//# sourceMappingURL=server.decorator.js.map