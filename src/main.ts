import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { env } from 'env.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gemini API')
    .setDescription('The Gemini API description')
    .setVersion('1.0')
    .addTag('gemini')
    .setContact('API Support', '', 'coco.boudard@gmail.com')
    .setLicense(
      'Apache 2.0',
      'https://www.apache.org/licenses/LICENSE-2.0.html',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    swaggerUiEnabled: false,
  });
  app.use(
    '/api',
    apiReference({
      content: documentFactory(),
    }),
  );
  app.enableCors();
  await app.listen(env.PORT);
}
bootstrap();
