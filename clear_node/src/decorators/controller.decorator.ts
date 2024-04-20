/*
  1) abstract class  - основное отличие АБСТРАКТНОГО класса от обычного - отсутствие возможности создание экземпляра
  2) abstract method - основное отличие АБСТРАКТНОГО метода от обычного - отсутствие логики

	3) implements      - типипизация с указанными обязательными методами и переменными
	4) extends         - наследование методов и переменных

	5) protected       - метод доступен в подклассах
	6) private         - метод не доступен в подкласса (не наследуется)
*/

import { ServerResponse } from "http";

abstract class ABaseController {
	abstract Controller(constructor: Function): void;
};

class BaseController implements ABaseController {

	/**
	 * @description декоратор класса, для определения запроса
	 */
	Controller =()=> {
		const self = this;
		return (constructor: any)=> {

			constructor.prototype.start = function (...args: any[]) {
        
				const req: Request = args[0];
				const res: ServerResponse = args[1];

			  const rootPoint: string = req.url.split('/')[2];

				if (rootPoint === undefined) {
					self.prepareResponse(res, (this as any).answer());
				} else {
					const methodsOfClass = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
					const findedMethod = methodsOfClass.find(nameMethod => nameMethod.toLowerCase() === rootPoint.toLowerCase());
					
					console.log('###', findedMethod);

					if (findedMethod) {
					  if (!self.getReqMethodFromMethodClass(findedMethod, req.method)) {
							console.warn("Метод класса и метод запроса не совпадают");
					  };
						self.prepareResponse(res, (this as any)[findedMethod](req, res));
					} else {
						console.warn("по данному запросу не было найдено метода");
						self.prepareResponse(res, (this as any).answer());
					};
				};
      };
		};
  };

	
	DistributionRes =()=> {
		const self = this;

		return (target: any, key: string, descriptor: PropertyDescriptor)=> {

			descriptor.value = function(...args: any[]) {

				const req: Request = args[0];
				const res: ServerResponse = args[1];

				console.log('########')
				console.log(req.body)
				console.log('########')
			  const rootPoint: string = req.url.split('/')[2];

				if (rootPoint === undefined) {
					self.prepareResponse(res, (this as any).answer());
				} else {
					const methodsOfClass = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
					const findedMethod = methodsOfClass.find(nameMethod => nameMethod.toLowerCase() === rootPoint.toLowerCase());
					

					if (findedMethod) {
					  if (!self.getReqMethodFromMethodClass(findedMethod, req.method)) {
							console.warn("Метод класса и метод запроса не совпадают");
					  };
						self.prepareResponse(res, (this as any)[findedMethod]());
					} else {
						console.warn("по данному запросу не было найдено метода");
						self.prepareResponse(res, (this as any).answer());
					};
				};
			};

			return descriptor;
		};
	};


	/**
	 * @description res ответ по полученным данным в param1
	 * @param {ServerResponse} res Объект ответа сервера. 
	 * @param {{statusCode, setHeader, end}: {statusCode: number, setHeader: [string, string], end: unknown}} полученные данные от вызываемого метода класса 
	 */
	private prepareResponse(
		res: ServerResponse, 
		{statusCode, setHeader, end}: {statusCode: number, setHeader: [string, string] , end: unknown}
	) {
		
		res.setHeader(setHeader[0], setHeader[1]);
		res.statusCode = statusCode;
		
		if (typeof end === "string") {
			res.end(end);
		} else {
			res.end(JSON.stringify(end));
		};

	};

	/**
	 * @description сравнение метода запроса и метода класса
	 * @example getReqMethodFromMethodClass('getUsers', 'GET') === true 
	 * @param {string} methodOfClass 
	 * @param {string} reqMethod 
	 * @returns {void | boolean}
	 */
	private getReqMethodFromMethodClass(methodOfClass: string, reqMethod: string): void | boolean {
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
		} else {
			return true;
		}
	};
};

export const { Controller, DistributionRes } = new BaseController();