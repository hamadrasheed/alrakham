import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import * as httpLogs from 'morgan';

dotenv.config({ path: '.env' });

const port: number = +process.env.PORT ?? 8000;

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');
  app.use(httpLogs('dev'));

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(port);

}

bootstrap();
