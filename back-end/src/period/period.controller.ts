import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { PeriodService } from './period.service';
import { FindAllOptionsQueryDTO } from 'src/shared/dtos/find-all-options-query.dto';
import { CreatePeriodDTO } from './dtos/create-period.dto';

@Controller('period')
export class PeriodController {
    constructor(
        private readonly periodService: PeriodService,
    ) { }

    @Get()
    async findAll(@Query() query: FindAllOptionsQueryDTO) {
        return await this.periodService.findAll(query)
    }

    @Post()
    async create(@Body() body: CreatePeriodDTO) {
        return await this.periodService.create(body)
    }
}
