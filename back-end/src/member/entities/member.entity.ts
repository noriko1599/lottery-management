import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from 'typeorm';
import { AppBaseEntity } from 'src/database/base-entity.entity';
import { CreateMemberDTO } from '../dtos/create-member.dto';
import { Purchase } from 'src/purchase/entities/purchase.entity';

@Entity()
export class Member extends AppBaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    sReward: number

    @Column({ nullable: true })
    sCommission: number;

    @Column({ nullable: true })
    a1Reward: number

    @Column({ nullable: true })
    a1Commission: number;

    @Column({ nullable: true })
    b1Reward: number

    @Column({ nullable: true })
    b1Commission: number;

    @Column({ nullable: true })
    c1Reward: number

    @Column({ nullable: true })
    c1Commission: number;

    @Column({ nullable: true })
    aReward: number

    @Column({ nullable: true })
    aCommission: number;

    @Column({ nullable: true })
    bReward: number

    @Column({ nullable: true })
    bCommission: number;

    @Column({ nullable: true })
    cReward: number

    @Column({ nullable: true })
    cCommission: number;

    @Column({ nullable: true })
    bigReward: number

    @Column({ nullable: true })
    bigCommission: number;

    @Column({ nullable: true })
    nReward: number

    @Column({ nullable: true })
    nCommission: number;

    @OneToMany(type => Purchase, purchase => purchase.member, {
        cascade: true,
    })
    purchases: Purchase[];

    public static fromDTO(dto: CreateMemberDTO) {
        const { name, sReward, a1Reward, b1Reward, c1Reward, aReward, bReward, cReward, bigReward, nReward, a1Commission, aCommission, b1Commission, bCommission, bigCommission, c1Commission, cCommission, nCommission, sCommission } = dto;
        const member = new Member();
        member.name = name;
        member.sReward = sReward;
        member.sCommission = sCommission
        member.a1Reward = a1Reward;
        member.a1Commission = a1Commission
        member.b1Reward = b1Reward;
        member.b1Commission = b1Commission
        member.c1Reward = c1Reward;
        member.c1Commission = c1Commission
        member.aReward = aReward;
        member.aCommission = aCommission
        member.bReward = bReward;
        member.bCommission = bCommission
        member.cReward = cReward;
        member.cCommission = cCommission
        member.bigReward = bigReward;
        member.bigCommission = bigCommission
        member.nReward = nReward
        member.nCommission = nCommission
        return member;
    }
}
