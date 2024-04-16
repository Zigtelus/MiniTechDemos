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
exports.AUsers = void 0;
const base_abstract_1 = require("./base.abstract");
class AUsers extends base_abstract_1.ABase {
}
exports.AUsers = AUsers;
;
//# sourceMappingURL=users.abstract.js.map