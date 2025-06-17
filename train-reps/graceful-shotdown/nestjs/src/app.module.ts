import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig] })],
  controllers: [AppController],
})
export class AppModule {}
