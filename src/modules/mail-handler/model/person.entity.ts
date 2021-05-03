import { Column, Entity } from 'typeorm'

@Entity({ schema: 'b2b', name: 'siteb_pessoa' })
export class PersonEntity {
    @Column('bigint', { primary: true })
    idcnpj_cpf: string

    @Column('smallint')
    idtipopessoa: number

    @Column('smallint')
    idtipocontribuinte: number

    @Column('smallint')
    idsituacaopessoa: number

    @Column('smallint')
    idtiposexo: number

    @Column('character varying', { length: 14 })
    cnpj_cpf: string

    @Column('character varying', { length: 100 })
    nome: string

    @Column('character varying', { length: 100 })
    nomefantasia: string

    @Column('character varying', { length: 20 })
    cce_rg: string

    @Column('date')
    datacriacao: string

    @Column('date')
    datacadastro: string

    @Column('timestamp without time zone')
    dataalteracao: Date

    @Column('integer')
    atualizadoreceita: number
}
