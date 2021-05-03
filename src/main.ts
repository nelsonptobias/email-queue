import config from '@config'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { HttpExceptionFilter } from '@util/exception.middleware'
import { AppModule } from './app/app.module'

const generateSwaggerDoc = (app: INestApplication) => {
    const options = new DocumentBuilder()
        .setTitle('B2B AUTH API')
        .setDescription('AUTH API Documentation')
        .setVersion('1.0')
        .build()

    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('docs', app, document)
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })

    app.setGlobalPrefix('/api')

    generateSwaggerDoc(app)

    app.useGlobalFilters(new HttpExceptionFilter())

    app.useGlobalPipes(new ValidationPipe({ transform: true }))

    await app.listen(config.port)
}
bootstrap()
