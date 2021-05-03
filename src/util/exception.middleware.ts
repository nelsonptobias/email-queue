import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger: Logger = new Logger(HttpExceptionFilter.name)

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()

        this.logger.error(exception)

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

        const error = this.parseException(exception)

        response.status(status).json(error)
    }

    parseException(exception: HttpException) {
        return Object.assign({}, exception.getResponse())
    }
}
