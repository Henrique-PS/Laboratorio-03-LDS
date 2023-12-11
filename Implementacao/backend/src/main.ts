import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { swaggerSetup } from './config/swagger-setup';

async function bootstrap() {
    const logger = new Logger();

    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    const apiPort = config.get('API_PORT');

    const document = swaggerSetup(app);

    if (process.env.NODE_ENV === 'development') {
        SwaggerModule.setup('api', app, document);

        fs.writeFileSync(
            './swagger-spec.json',
            JSON.stringify(document, null, 2)
        );
    }

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    );

    app.enableCors({
        origin: true,
        credentials: true,
    });

    await app.listen(apiPort, () =>
        logger.log(`API running on port ${apiPort}`)
    );
}
bootstrap();
