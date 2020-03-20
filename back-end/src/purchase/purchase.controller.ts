import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreatePurchaseDTO } from './dtos/create-purchase.dto';
import { PurchaseService } from './purchase.service';
import { FindAllOptionsQueryDTO } from 'src/shared/dtos/find-all-options-query.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(
        private readonly purchaseService: PurchaseService,
    ) { }

    @Post()
    async create(@Body() body: CreatePurchaseDTO) {
        return await this.purchaseService.create(body)
    }

    @Get()
    async findAll(@Query() query: FindAllOptionsQueryDTO) {
        return await this.purchaseService.findAll(query)
    }

    @Get(``)
    async getOverLimitPurchases() {
        return await this.purchaseService.getOverLimitPurchases()
    }
}
