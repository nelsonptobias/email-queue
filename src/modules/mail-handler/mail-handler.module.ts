import { Module } from '@nestjs/common'
import { MailModule } from '../mail/mail.module'
import { EmailController } from './controller/mail-handler.controller'
import { EmailHandlerService } from './service/mail-handler.service'

@Module({
    imports: [MailModule],
    controllers: [EmailController],
    providers: [EmailHandlerService],
    exports: [EmailHandlerService],
})
export class MailHandlerModule {}
