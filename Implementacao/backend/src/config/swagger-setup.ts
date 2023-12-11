import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (app) => {
    const options = new DocumentBuilder()
        .setTitle('Mono Direct API')
        .setDescription('')
        .setVersion('1.0')
        .addTag('mono-direct')
        .build();

    const document = SwaggerModule.createDocument(app, options);

    return document;
};
