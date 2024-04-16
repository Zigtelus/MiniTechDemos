/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

	3) implements      - типипизация с указанными обязательными методами и переменными
	4) extends         - наследование методов и переменных

	5) protected       - метод доступен в подклассах
	6) private         - метод не доступен в подкласса (не наследуется)
*/

import { ServerResponse } from "http";

abstract class ABase {
	constructor(req: Request, res: ServerResponse) {
		this.start(req, res);
	};

	/**
	 * @description  метод приводящий в действие весь класс
	 */
	protected start(req: Request, res: ServerResponse): void {};

	/**
	 * @description  дефолтный метод, который вызвается в случае, если не был найден метод класса для ответа
	 * @param res    отдаваемые данные
	 */
	protected abstract answer(res: ServerResponse): void;
};

export { ABase };