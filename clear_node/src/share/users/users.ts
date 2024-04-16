import { ServerResponse } from "http";
import { AUsers } from "../../types/abstracts";
import { Controller } from "@decorators";

@Controller()
export class Users extends AUsers {

	constructor(req: Request, res: ServerResponse) {
		super(req, res);
	};

	getUser() {
		return {
			statusCode: 200,
			setHeader: [
				['Content-Type', 'text/plain']
			],
			end: {
			  statusCode: 200,
			  setHeader: [
				  ['Content-Type', 'text/plain']
			  ],
			}
		}
	};

	putUser() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'put User'
		}
	};

	answer() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'this users'
		}
	};

};