import { Column, Entity } from 'typeorm'

@Entity({ schema: 'b2b', name: 'siteb_login' })
export class AuthEntity {
    @Column('bigint', { primary: true })
    idcnpj_cpf: string

    @Column('text')
    senha: string

    @Column('timestamp without time zone')
    datahorasenha: Date

    @Column('character varying')
    token: string

    @Column('timestamp without time zone')
    datahoratoken: Date

    @Column('integer')
    idsituacao: number

    @Column('character varying')
    motivobloqueio: string

    @Column('integer')
    idorigem: number
}
