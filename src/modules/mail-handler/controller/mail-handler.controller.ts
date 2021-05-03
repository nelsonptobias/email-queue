import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { EmailDTO } from '../dto/email.dto'

import { EmailHandlerService } from '../service/mail-handler.service'

@Controller('email')
export class EmailController {
    constructor(private readonly emailHandlerService: EmailHandlerService) {}

    @Post('send')
    @HttpCode(HttpStatus.NO_CONTENT)
    public send(@Body() email: EmailDTO) {
        return this.emailHandlerService.putEmailOnQueue(email)
    }
}
