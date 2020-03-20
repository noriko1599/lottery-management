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
    commission: number;

    @Column({ nullable: true })
    sReward: number

    @Column({ nullable: true })
    a1Reward: number

    @Column({ nullable: true })
    b1Reward: number

    @Column({ nullable: true })
    c1Reward: number
    @Column({ nullable: true })
    aReward: number

    @Column({ nullable: true })
    bReward: number
    @Column({ nullable: true })
    cReward: number

    @Column({ nullable: true })
    bigReward: number

    @Column({ nullable: true })
    nReward: number

    @OneToMany(type => Purchase, purchase => purchase.member, {
        cascade: true,
    })
    purchases: Purchase[];

    public static fromDTO(dto: CreateMemberDTO) {
        const { name, commission, sReward, a1Reward, b1Reward, c1Reward, aReward, bReward, cReward, bigReward, nReward } = dto;
        const member = new Member();
        member.name = name;
        member.commission = commission;
        member.sReward = sReward;
        member.a1Reward = a1Reward;
        member.b1Reward = b1Reward;
        member.c1Reward = c1Reward;
        member.aReward = aReward;
        member.bReward = bReward;
        member.cReward = cReward;
        member.bigReward = bigReward;
        member.nReward = nReward
        return member;
    }
}
