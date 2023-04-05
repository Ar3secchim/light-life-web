import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3333

async function server() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
server();