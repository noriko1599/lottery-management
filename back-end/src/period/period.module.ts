import { Module } from '@nestjs/common';
import { PeriodController } from './period.controller';
import { PeriodService } from './period.service';

@Module({
  controllers: [PeriodController],
  providers: [PeriodService]
})
export class PeriodModule {}
