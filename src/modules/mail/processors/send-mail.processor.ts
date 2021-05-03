/* eslint-disable no-console */
import { MailerService } from '@nestjs-modules/mailer'
import { OnQueueError, OnQueueFailed, Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import { SendEmailArgs } from '../interfaces/send-email.interface'

@Processor('mail')
export class SendEmailProcessor {
    constructor(private readonly mailerService: MailerService) {}

    @Process()
    async sendEmail({ data }: Job<SendEmailArgs>) {
        await this.mailerService.sendMail({
            ...data,
        })
    }

    @OnQueueError()
    public handlerError(err: Error) {
        console.error('handlerError', err)
    }

    @OnQueueFailed()
    public handlerFailed(job: Job, err: Error) {
        console.error('handlerFailed', job, err)
    }
}
