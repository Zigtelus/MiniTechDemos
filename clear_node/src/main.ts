import { Server } from "./server";

/**
 * @description - корневая функция, для запуска всего проекта
 */
function bootstrap() {
  new Server();
};

bootstrap();