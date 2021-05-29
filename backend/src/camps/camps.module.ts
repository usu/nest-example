import { Module } from '@nestjs/common';
import { CampsService } from './camps.service';
import { PeriodsService } from '../periods/periods.service';
import { CampsController } from './camps.controller';
import { CampsResolver } from './camps.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camp } from './entities/camp.entity';
import { Period } from '../periods/entities/period.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Camp]),
    TypeOrmModule.forFeature([Period]),
  ],
  controllers: [CampsController],
  providers: [CampsResolver, CampsService, PeriodsService],
})
export class CampsModule {}
