import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ schema: 'b2b', name: 'siteb_endereco' })
export class AddressEntity {
    @PrimaryColumn('integer')
    idendereco: number

    @Column('bigint')
    idcnpj_cpf: string

    @Column('smallint')
    idtipoendereco: number

    @Column('integer')
    idcidade: number

    @Column('integer', { nullable: true })
    idcidadeibge: number

    @Column('character varying', { nullable: true, length: 100 })
    descricao: string

    @Column('character varying', { length: 50 })
    endereco: string

    @Column('character varying', { length: 30 })
    bairro: string

    @Column('character varying', { nullable: true, length: 50 })
    complemento: string

    @Column('character varying', { nullable: true, length: 5 })
    numero: string

    @Column('character varying', { nullable: true, length: 8 })
    cep: string

    @Column('smallint')
    status: number
}
