import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  shutdownTimeout: parseInt(process.env.SHUTDOWN_TIMEOUT, 10) || 30000,
}));
