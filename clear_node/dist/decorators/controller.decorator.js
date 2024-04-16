"use strict";
/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

    3) implements      - типипизация с указанными обязательными методами и переменными
    4) extends         - наследование методов и переменных

    5) protected       - метод доступен в подклассах
    6) private         - метод не доступен в подкласса (не наследуется)
*/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionRes = exports.Controller = void 0;
class ABaseController {
}
;
class BaseController {
    constructor() {
        this.Controller = () => {
            const self = this;
            return (constructor) => {
                const originalMethod = constructor.prototype.start;
                constructor.prototype.start = function (...args) {
                    const req = args[0];
                    const res = args[1];
                    const rootPoint = req.url.split('/')[2];
                    if (rootPoint === undefined) {
                        self.prepareResponse(res, this.answer());
                    }
                    else {
                        const methodsOfClass = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
                        const findedMethod = methodsOfClass.find(nameMethod => nameMethod.toLowerCase() === rootPoint.toLowerCase());
                        if (findedMethod) {
                            if (!self.getReqMethodFromMethodClass(findedMethod, req.method)) {
                                console.warn("Метод класса и метод запроса не совпадают");
                            }
                            ;
                            self.prepareResponse(res, this[findedMethod]());
                        }
                        else {
                            console.warn("по данному запросу не было найдено метода");
                            self.prepareResponse(res, this.answer());
                        }
                        ;
                    }
                    ;
                };
                // console.log('dd', constructor.prototype.start());
                // console.log(new constructor());
                // console.log('dd', constructor.prototype.dd());
                // constructor.prototype.request = req;
                // constructor.prototype.response = res;
                // console.log(`${this}: Class decorator called.`);
                // console.log(`${constructor}: Class decorator called.`);
            };
        };
        this.DistributionRes = () => {
            const self = this;
            return (target, key, descriptor) => {
                descriptor.value = function (...args) {
                    const req = args[0];
                    const res = args[1];
                    const rootPoint = req.url.split('/')[2];
                    if (rootPoint === undefined) {
                        self.prepareResponse(res, this.answer());
                    }
                    else {
                        const methodsOfClass = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
                        const findedMethod = methodsOfClass.find(nameMethod => nameMethod.toLowerCase() === rootPoint.toLowerCase());
                        if (findedMethod) {
                            if (!self.getReqMethodFromMethodClass(findedMethod, req.method)) {
                                console.warn("Метод класса и метод запроса не совпадают");
                            }
                            ;
                            self.prepareResponse(res, this[findedMethod]());
                        }
                        else {
                            console.warn("по данному запросу не было найдено метода");
                            self.prepareResponse(res, this.answer());
                        }
                        ;
                    }
                    ;
                };
                return descriptor;
            };
        };
    }
    /**
     * @description res ответ по полученным данным в param1
     * @param {ServerResponse} res Объект ответа сервера.
     * @param {{statusCode, setHeader, end}: {statusCode: number, setHeader: [string, string][], end: unknown}} полученные данные от вызываемого метода класса
     */
    prepareResponse(res, { statusCode, setHeader, end }) {
        if (setHeader.length > 0) {
            const deletedEl = setHeader.shift();
            if (deletedEl !== undefined) {
                res.setHeader(deletedEl[0], deletedEl[1]);
            }
        }
        ;
        if (typeof end === "string") {
            res.end(end);
        }
        else {
            res.end(JSON.stringify(end));
        }
        ;
        res.statusCode = statusCode;
    }
    /**
     * @description сравнение метода запроса и метода класса
     * @example getReqMethodFromMethodClass('getUsers', 'GET') === true
     * @param {string} methodOfClass
     * @param {string} reqMethod
     * @returns {void | boolean}
     */
    getReqMethodFromMethodClass(methodOfClass, reqMethod) {
        const nameMethod = methodOfClass.split('');
        const endNameReqMethod = nameMethod.find((el) => el === el.toUpperCase());
        if (endNameReqMethod === undefined) {
            console.error("в данном методе класса нет заглавной буквы");
            return;
        }
        const indexEndNameReqMethod = nameMethod.indexOf(endNameReqMethod);
        const getNameReqMethod = nameMethod.slice(0, indexEndNameReqMethod).join('');
        if (getNameReqMethod !== reqMethod.toLowerCase()) {
            console.error("метод запроса и метод класса не совпадает");
            return false;
        }
        else {
            return true;
        }
    }
    ;
}
;
_a = new BaseController(), exports.Controller = _a.Controller, exports.DistributionRes = _a.DistributionRes;
//# sourceMappingURL=controller.decorator.js.map