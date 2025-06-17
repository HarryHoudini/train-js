import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Server } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = config.get<number>('app.port');
  const shutdownTimeout = config.get<number>('app.shutdownTimeout');

  // Включаем хуки graceful shutdown внутри Nest
  app.enableShutdownHooks();

  const server: Server = app.getHttpServer();
  const connections = new Set<any>();

  server.on('connection', (socket) => {
    connections.add(socket);
    socket.on('close', () => connections.delete(socket));
  });

  // Перехватываем сигналы и выполняем shutdown
  process.once('SIGTERM', () => shutdown(logger, app, connections, shutdownTimeout));
  process.once('SIGINT', () => shutdown(logger, app, connections, shutdownTimeout));

  await app.listen(port);
  logger.log(`Server is running on http://localhost:${port}`);
}

async function shutdown(
  logger: Logger,
  app,
  connections: Set<any>,
  timeout: number,
) {
  logger.log('Graceful shutdown initiated');

  // Шаг 1: закрыть Nest-приложение (останавливает обработчики и мидлвары)
  await app.close();
  logger.log('Nest application closed, waiting for pending connections');

  // Шаг 2: после таймаута принудительно уничтожить оставшиеся сокеты
  setTimeout(() => {
    logger.warn('Forcing shutdown, destroying remaining connections');
    connections.forEach((socket) => socket.destroy());
    process.exit(0);
  }, timeout);
}

bootstrap();
