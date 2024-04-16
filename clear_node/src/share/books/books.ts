import { ServerResponse } from "http";
import { ABooks } from "../../types/abstracts";

export class Books extends ABooks {
	// constructor(req: Request, res: ServerResponse) {
	// 	this.start(req, res)
	// };

	start(req: Request, res: ServerResponse) {
		this.answer(res);
		 return this.method(req);
	};

	answer(res: ServerResponse) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
		res.end('this books');

		return 'this books'
	};

	method(req: Request) {
		req.method
	};

};