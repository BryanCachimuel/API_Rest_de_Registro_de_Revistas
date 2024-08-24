import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);

  app.enableCors(CORS);

  /*TODO: en la url se coloca el termino api: http://localhost:8000/api/users/say-hello */
  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT'));

  console.log(`Aplicación ejecutandose en : ${await app.getUrl()}`);
}
bootstrap();
