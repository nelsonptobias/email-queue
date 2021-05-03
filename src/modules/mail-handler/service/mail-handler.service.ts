import { InjectQueue } from '@nestjs/bull'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bull'
import { SendEmailArgs } from 'src/modules/mail/interfaces/send-email.interface'
import { EmailDTO } from '../dto/email.dto'

@Injectable()
export class EmailHandlerService {
    constructor(
        @InjectQueue('mail')
        private readonly emailServiceQueue: Queue<SendEmailArgs>,
    ) {}

    public putEmailOnQueue(email: EmailDTO): EmailDTO {
        this.emailServiceQueue.add({
            from: email.from,
            to: email.to,
            subject: email.subject,
            text: email.text,
        })
        return email
    }
}
