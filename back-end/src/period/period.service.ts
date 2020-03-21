import { Injectable } from '@nestjs/common';
import { FindAllOptionsQueryDTO } from 'src/shared/dtos/find-all-options-query.dto';
import { Period } from './entities/period.entity';
import { CreatePeriodDTO } from './dtos/create-period.dto';

@Injectable()
export class PeriodService {
    async findAll(options: FindAllOptionsQueryDTO) {
        console.log(`Fetch all period`);
        const { limit, skip } = options
        const period = await Period.find({
            skip,
            take: limit,
        })
        return period
    }

    async create(dto: CreatePeriodDTO) {
        const period = Period.fromDTO(dto)
        return await period.save()
    }
}
