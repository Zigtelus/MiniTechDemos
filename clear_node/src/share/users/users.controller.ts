import { ServerResponse } from "http";
import { AUsers } from "../../types/abstracts";
import { Controller } from "@decorators";
import { UserService } from "./user.service";

interface IAnswer {
	statusCode: number;
	setHeader: any;
	end: string;
};

// @Controller()
export class UsersController extends AUsers <IAnswer> {
	private userService: UserService = new UserService();

	constructor(
		req: Request, 
		res: ServerResponse, 
	) {
		super(req, res);
		this.postUser(req, res);
	};

	private getUser() {

		return this.userService.getUser();
		// return {
		// 	statusCode: 200,
		// 	setHeader: [
		// 		['Content-Type', 'text/plain']
		// 	],
		// 	end: {
		// 	  statusCode: 200,
		// 	  setHeader: [
		// 		  ['Content-Type', 'text/plain']
		// 	  ],
		// 	}
		// };
	};

	private postUser(req: Request, res: ServerResponse) {

		console.log('#####')
		// console.log(req)
		console.log('#####')
		// return this.userService.postUser(req.body)
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'put User'
		};
	};

	protected answer() {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: 'this users'
		};
	};

};