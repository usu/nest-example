import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodsResolver } from './periods.resolver';
import { Period } from './entities/period.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Period])],
  providers: [PeriodsResolver, PeriodsService],
})
export class PeriodsModule {}
