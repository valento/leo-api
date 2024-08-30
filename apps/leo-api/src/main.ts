/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const globalPrefix = 'leo-api'
  const port = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(globalPrefix)

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Leo Vegas API')
    .addBearerAuth(undefined, 'dafaultBearerAuthorizationToken')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(globalPrefix, app, document,
  {
    swaggerOptions: {
      authAction: {
        dafaultBearerAuthorizationToken: {
          name: 'dafaultBearerAuthorizationToken',
          schema: {
            description: 'Default',
            type: 'http',
            in: 'header',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          },
          value: 'sampleBearerAuthToken123'
        }
      }
    }
  }
)

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap()
