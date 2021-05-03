import { Column, Entity } from 'typeorm'

@Entity({ schema: 'b2b', name: 'siteb_pessoaauxiliar' })
export class AuxiliaryPersonEntity {
    @Column('bigint', { primary: true })
    idcnpj_cpf: string

    @Column('character varying', { length: 300 })
    email: string

    @Column('character varying', { length: 300 })
    emailnfe: string

    @Column('character varying', { length: 400 })
    observacao: string

    @Column('character varying')
    prazomediomaximo: string

    @Column('smallint')
    idgradeypadrao: number

    @Column('bigint')
    idcnpj_cpfagrupadorlimite: number

    @Column('character varying', { length: 10 })
    idcnae: string

    @Column('smallint')
    receberemailmarketing: number

    @Column('smallint')
    recebersmsmarketing: number

    @Column('smallint')
    recebercorreiomarketing: number

    @Column('smallint')
    idsituacaocadastro: number

    @Column('character varying')
    idsegmentoatuacao: string

    @Column('integer')
    idcargo: number

    @Column('integer')
    idquantidadeloja: number

    @Column('integer')
    idanofundacao: number

    @Column('integer')
    idparceiro: number

    @Column('smallint')
    consumofinal: number
}
