/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

	3) implements      - типипизация с указанными обязательными методами и переменными
	4) extends         - наследование методов и переменных

	5) protected       - метод доступен в подклассах
	6) private         - метод не доступен в подкласса (не наследуется)
*/

import { ServerResponse } from "http";

abstract class AServer {
	abstract Server(): void;

  /**
   * Декоратор по умолчанию для обработки запросов.
   * @param {Function} target               - Целевой класс или функция, к которому применяется декоратор.
   * @param {string} key                    - Имя метода, к которому применяется декоратор.
   * @param {PropertyDescriptor} descriptor - Дескриптор свойства, к которому применяется декоратор.
   */
	abstract DefaultResponse(): Function;
};

class Server implements AServer {
	Server() {};

	DefaultResponse(): Function {
		return (target: Function, key: string, descriptor: PropertyDescriptor)=> {

			let originalMethod = descriptor.value;

			descriptor.value = function(...args: any[]) {
				const result = originalMethod.apply(this, args);

				const req: Request = args[0];
				const res: ServerResponse = args[1];

				if (req.url === '/') {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/plain');
					res.end('There should be instructions here' + req.url);
					return;
				};

				if (result === undefined) {
				  res.statusCode = 200;
				  res.setHeader('Content-Type', 'text/plain');
					res.end(req.url);
					return;
				};
			};
		}
	};

};

export const { DefaultResponse } = new Server;