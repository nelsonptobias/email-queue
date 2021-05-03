import config from '@config'

export const B2B_REDIS_QUEUE_CONNECTION = {
    url: config.queue.url,
}

export const B2B_MAIL_CONNECTION = {
    host: config.mail.host,
    port: config.mail.port,
    auth: {
        user: config.mail.auth.user,
        pass: config.mail.auth.pass,
    },
}
