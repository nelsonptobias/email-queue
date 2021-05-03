import { MailerModule } from '@nestjs-modules/mailer'
import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { B2B_MAIL_CONNECTION, B2B_REDIS_QUEUE_CONNECTION } from './connection'
import { SendEmailProcessor } from './processors/send-mail.processor'

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'mail',
            redis: B2B_REDIS_QUEUE_CONNECTION.url,
        }),
        MailerModule.forRoot({
            transport: B2B_MAIL_CONNECTION,
        }),
    ],
    providers: [SendEmailProcessor],
    exports: [BullModule],
})
export class MailModule {}
