import { Injectable, Logger } from '@nestjs/common';
import { Member } from './entities/member.entity';
import { FindAllOptionsQueryDTO } from '../shared/dtos/find-all-options-query.dto';
import { CreateMemberDTO } from './dtos/create-member.dto';

@Injectable()
export class MemberService {
    async findAll(options: FindAllOptionsQueryDTO) {
        console.log(`Fetch all members`);
        const member = await Member.find({
            take: options.limit,
            skip: options.skip,
        });
        return member;
    }

    async findOne(id: string) {
        console.log(`Fetch  member id: ${id}`);
        const member = await Member.findOne(id);
        return member;
    }

    async create(dto: CreateMemberDTO) {
        console.log(`Create member`);
        const member = Member.fromDTO(dto);
        return await member.save({ transaction: true });
    }

    async query(query: string) {
        return await Member.query(query)
    }
}
