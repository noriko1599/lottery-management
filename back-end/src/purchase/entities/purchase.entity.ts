import { AppBaseEntity } from "src/database/base-entity.entity";
import { PrimaryGeneratedColumn, ManyToOne, JoinColumn, Entity, Column } from "typeorm";
import { Member } from "src/member/entities/member.entity";
import { CreatePurchaseDTO } from "../dtos/create-purchase.dto";
import { Period } from "src/period/entities/period.entity";

@Entity()
export class Purchase extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    fourDigitNumber: string

    @Column({ nullable: true })
    threeDigitNumber: string

    @Column({ nullable: true })
    s: number

    @Column({ nullable: true })
    a1: number

    @Column({ nullable: true })
    b1: number

    @Column({ nullable: true })
    c1: number

    @Column({ nullable: true })
    a: number

    @Column({ nullable: true })
    b: number

    @Column({ nullable: true })
    c: number

    @Column({ nullable: true })
    big: number

    @Column({ nullable: true })
    n: number

    @Column({ nullable: true, default: false })
    isCut: boolean

    @ManyToOne(type => Member, member => member.purchases)
    @JoinColumn()
    member: Member;

    @ManyToOne(type => Period, period => period.purchases)
    @JoinColumn()
    period: Period;

    public static fromDTO(dto: CreatePurchaseDTO) {
        const { fourDigitNumber, threeDigitNumber, s, a1, b1, c1, a, b, c, big, n, memberId, periodId } = dto
        const purchase = new Purchase()
        purchase.fourDigitNumber = fourDigitNumber
        purchase.threeDigitNumber = threeDigitNumber
        purchase.s = s
        purchase.a1 = a1
        purchase.b1 = b1
        purchase.c1 = c1
        purchase.a = a
        purchase.b = b
        purchase.c = c
        purchase.big = big
        purchase.n = n

        const member = new Member()
        member.id = memberId
        purchase.member = member

        const period = new Period()
        period.id = periodId
        purchase.period = period
        return purchase
    }
}
