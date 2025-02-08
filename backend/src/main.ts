// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global body parsing for JSON
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();  // Optional, for handling cross-origin requests

  await app.listen(3000);
}
bootstrap();
