import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodsController } from './periods.controller';
import { PeriodsResolver } from './periods.resolver';
import { Period } from './entities/period.entity';
import { Camp } from '../camps/entities/camp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Period]),
    TypeOrmModule.forFeature([Camp]),
  ],
  controllers: [PeriodsController],
  providers: [PeriodsResolver, PeriodsService],
})
export class PeriodsModule {}
