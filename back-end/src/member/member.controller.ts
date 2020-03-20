import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { MemberService } from './member.service';
import { FindOneParamDTO } from '../shared/dtos/find-one-param.dto';
import { FindAllOptionsQueryDTO } from '../shared/dtos/find-all-options-query.dto';
import { CreateMemberDTO } from './dtos/create-member.dto';

@Controller('member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
    ) { }

    @Get()
    async findAll(@Query() query: FindAllOptionsQueryDTO) {
        return await this.memberService.findAll(query);
    }

    @Get(`:id`)
    async findOne(@Param() params: FindOneParamDTO) {
        return await this.memberService.findOne(params.id);
    }

    @Post()
    async create(@Body() body: CreateMemberDTO) {
        return await this.memberService.create(body);
    }
}
