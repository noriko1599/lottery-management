import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { DatabaseModule } from './database/database.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [MemberModule, DatabaseModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
