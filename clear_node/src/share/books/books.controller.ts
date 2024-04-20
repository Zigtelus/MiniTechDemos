import { ServerResponse } from "http";
import { ABooks } from "../../types/abstracts";
import { Controller, DistributionRes } from "@decorators";
const fs = require('fs');

interface IAnswer {
	statusCode: number;
	setHeader: any;
	end: any;
};

@Controller()
export class BooksController extends ABooks<IAnswer, IAnswer>  {

	constructor(req: Request, res: ServerResponse) {
		super(req, res);
	};

	getBooks() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'req.body'
		};
	};

	resolveBody(body: any): string {

		const buf: any = Buffer.from(body, 'hex');

		// const JSONparse = JSON.parse(buf.toString());
		const JSONparse = false;
		if (!!JSONparse) {
		  return buf.toString();
		} else {
			// console.log(buf);

      const data = 'Пример текста для записи в файл.';
			fs.writeFile('image.png', buf, (err: any, data: any) => {
				if (err) {
					console.error('Ошибка чтения файла:', err);
					return;
				}
				console.log('Изображение успешно сохранено.');

				// // Отображение данных буфера в виде строки
				// console.log(data.toString('hex'));
			
				// // Преобразование буфера в изображение и сохранение его
				// fs.writeFile('decoded_image.jpg', data, (err: any) => {
				// 	if (err) {
				// 		console.error('Ошибка записи файла:', err);
				// 		return;
				// 	}
				// 	console.log('Изображение успешно декодировано и сохранено.');
				// });
			});

			return "3333"
		}
		
		console.log(buf.toString())
		buf.ff = 'ddddd'
		let newBuf = JSON.parse(buf.toString());
		newBuf.ff = 'ee';
		newBuf = JSON.stringify(newBuf);



		// console.log(JSON.parse(buf.toString()));

		// return 
	}

	putBooks(req: any, res: any) {

		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: this.resolveBody(req.body) ?? 'req.body'
		};
	};

	answer() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'this books'
		};
	};

};