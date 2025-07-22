import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return { status: 'ok', pid: process.pid };
  }

  // Пример обработки запроса, после которого необходимо завершить процесс
  @Get('critical')
  async criticalTask(@Req() req: Request, @Res() res: Response) {
    try {
      // Выполняем бизнес-логику, которая привела к критической ошибке
      // Например, сбой в подсистеме, из-за которого продолжать работу бессмысленно
      throw new Error('Critical failure');
    } catch (err) {
      // Сразу отвечаем клиенту, чтобы не держать соединение открытым
      res.status(500).json({
        message: 'Сервер столкнулся с критической ошибкой и будет перезапущен.',
      });

      // Инициируем graceful shutdown — эмитим SIGTERM,
      // который перехвачен в main.ts
      process.emit('SIGTERM');
    }
  }
}
