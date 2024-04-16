/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

	3) implements      - типипизация с указанными обязательными методами и переменными
	4) extends         - наследование методов и переменных

	5) protected       - метод доступен в подклассах
	6) private         - метод не доступен в подкласса (не наследуется)
*/

import { ABase } from "./base.abstract";

abstract class ABooks extends ABase {
	// constructor(req: Request, res: Response) {
	// 	this.start(req, res);
	// };

	// start(req: Request, res: Response): void {

	// };
};

export { ABooks };