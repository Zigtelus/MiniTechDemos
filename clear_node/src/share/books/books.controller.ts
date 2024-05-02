import { ServerResponse } from "http";
import { ABooks } from "../../types/abstracts";
import { Controller, DistributionRes } from "@decorators";
const fs = require('fs');
// const sharp = require('sharp');

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
		fs.writeFile("./src/share/books/uuyr2.png", body, (err: any, data: any) => {
			if (err) {
				console.error('Ошибка чтения файла:', err);
				return;
			};
			console.log('Изображение успешно сохранено.');
		});

		return "3333";
	};

	resolveBodyMP3(body: any): string {
		fs.writeFile("./src/share/books/uuyr.mp3", body, (err: any, data: any) => {
			if (err) {
				console.error('Ошибка чтения файла:', err);
				return;
			};
			console.log('Изображение успешно сохранено.');
		});

		return "3333";
	};

	resolveBodyFile(body: any): boolean {
		const buf: any = Buffer.from(body, 'hex');
		console.log(buf);
		fs.writeFile('./src/share/books/image.png', buf, (err: any, data: any) => {
			if (err) {
				console.error('Ошибка чтения файла:', err);
				return false;
			}
			console.log('Изображение успешно сохранено.');
		});

		return true;
	}

	resolveBodyJson(body: any) {
		const buf: any = Buffer.from(body, 'hex');
		
		const JSONparse = JSON.parse(buf.toString());
		return buf.toString();
	}

	postBooks(req: any, res: any) {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'txt/pleain'],
			end: this.resolveBody(req.body) ?? 'req.body'
		};
	};

	// дефолтный овтет, на случай если не было найдено нужного метода
	answer() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'this books'
		};
	};

};