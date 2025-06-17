import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { WorkerPool } from './workerPool';
import path from 'path';

dotenv.config();

const PORT = parseInt(process.env.PORT ?? '3000', 10);
const WORKER_COUNT = parseInt(process.env.WORKER_COUNT ?? '4', 10);

const app = express();

// Безопасность и лимитирование
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? '60000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX ?? '100', 10),
  })
);

const pool = new WorkerPool(path.join(__dirname, 'fibWorker.ts'), WORKER_COUNT);

// Эндпоинт — неблокирующий
app.post(
  '/fibonacci',
  async (req, res, next) => {
    try {
      const { n } = req.body as { n: number };
      if (!Number.isInteger(n) || n < 0) {
        return res.status(400).json({ error: '`n` must be a non-negative integer' });
      }
      // enforce a sane upper limit to avoid DoS
      if (n > 100_000_000) {
        return res.status(413).json({ error: '`n` too large; max is 20000' });
      }

      // now fibWorker returns a string!
      const fibAsString = await pool.exec<string>(n);
      res.json({ n, fib: fibAsString });
    } catch (err) {
      next(err);
    }
  }
);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Глобальный обработчик ошибок
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Fibonacci-service запущен на порту ${PORT}`);
});
