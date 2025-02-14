import { ServerResponse } from "http";
import { UsersController, BooksController } from "./share";
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
  body: Buffer[] = [];

  constructor() {
		this.start();
  };

  start() {
    const server = createServer(this.handleRequest.bind(this));

    server.listen(this.port, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    });
  };

  handleRequest(req: any, res: ServerResponse) {

    // отключаем CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    req.on('data', (chunk: any) => {
		  console.log('start')
      this.body.push(chunk);
    });

    req.on('end', ()=> {
		  console.log('end')

      req.body = Buffer.concat(this.body);
      this.routeRequest(req, res);
    });

    req.on("error", function(e: any){
      console.error(e);
    });
  };

  @DefaultResponse()
  routeRequest(req: any, res: ServerResponse) {
    
    const rootPoint = req.url.split('/')[1];
    
    switch (rootPoint) {
			case 'books':
				return new BooksController(req, res);
			case 'users':
				return new UsersController(req, res);
    };
  };
}