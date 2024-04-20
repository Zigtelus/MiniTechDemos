

export class UserService {
	public getUser() {
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
		};
	};

	public postUser(body: any) {
		return {
			statusCode: 200,
			setHeader: ['Content-Type', 'text/plain'],
			end: body
		};
	};
}