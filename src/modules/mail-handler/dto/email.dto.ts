import { IsEmail, IsNotEmpty } from 'class-validator'

export class EmailDTO {
    @IsEmail()
    @IsNotEmpty()
    from: string

    @IsEmail()
    @IsNotEmpty()
    to: string

    @IsNotEmpty()
    subject: string

    @IsNotEmpty()
    text: string
}
