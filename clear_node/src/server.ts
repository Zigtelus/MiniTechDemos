import { ServerResponse } from "http";
import { Users, Books } from "./share";
import { DefaultResponse } from "@decorators";

const { createServer } = require('http');
const mysql = require('mysql');

abstract class AServer {


  /**
   * @description метод для запуска сервера
   */
  public abstract start(): void;

  /**
   * @description распределение экзепляров класса по разным запросам
   * @param req   получаемые данные
   * @param res   отдаваемые данные
   */
  public abstract handleRequest(req: Request, res: ServerResponse): void;
};

export class Server implements AServer {
  
  hostname = '127.0.0.1';
  port = 3000;

  constructor() {
		this.start();
    this.handleRequest = this.handleRequest.bind(this);
  };

  start() {
    const server = createServer(this.handleRequest);
    server.listen(this.port, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    });
  };

  @DefaultResponse()
  handleRequest(req: Request, res: ServerResponse) {

    const rootPoint = req.url.split('/')[1];
    
    switch (rootPoint) {
			case 'books':
				return new Books(req, res);
			case 'users':
				return new Users(req, res);
    };
  };
}