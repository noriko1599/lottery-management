import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePurchaseDTO } from './dtos/create-purchase.dto';
import { Purchase } from './entities/purchase.entity';
import { FindAllOptionsQueryDTO } from 'src/shared/dtos/find-all-options-query.dto';

@Injectable()
export class PurchaseService implements OnModuleInit {
    async onModuleInit() {
        // console.log(await this.getOverLimitPurchases())
        // console.log(await this.findAll())
    }

    async create(dto: CreatePurchaseDTO) {
        console.log(`Create a purchase`);
        const purchase = Purchase.fromDTO(dto)
        return await purchase.save()
    }

    async findAll(options?: FindAllOptionsQueryDTO) {
        console.log(`Fetch all purchase`);
        const purchase = await Purchase.find({
            take: options?.limit || null,
            skip: options?.skip || null,
            relations: [`member`]
        });
        return purchase;
    }

    async getOverLimitPurchases() {
        const purchases = await this.query(`
            SELECT "fourDigitNumber" as number,
                SUM(s) as s, SUM(a1) as a1, SUM(b1) as b1, SUM(c1) as c1,
                SUM(a) as a, SUM(b) as b, SUM(c) as c,
                SUM(big) as big, SUM(n) as n
            FROM purchase
            WHERE "isCut" = false
            GROUP BY "fourDigitNumber"
        `) as any[]
        return purchases
    }

    async query(query: string) {
        return await Purchase.query(query)
    }
}
