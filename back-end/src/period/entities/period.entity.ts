import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AppBaseEntity } from "src/database/base-entity.entity";
import { Purchase } from "src/purchase/entities/purchase.entity";
import { CreatePeriodDTO } from "../dtos/create-period.dto";

@Entity()
export class Period extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: true })
    name: string

    @OneToMany(type => Purchase, purchase => purchase.period, {
        cascade: true,
    })
    purchases: Purchase[]

    public static fromDTO(dto: CreatePeriodDTO) {
        const { name } = dto
        const period = new Period()
        period.name = name
        return period
    }
}
