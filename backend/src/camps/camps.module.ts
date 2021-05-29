import { Module } from '@nestjs/common';
import { CampsService } from './camps.service';
import { CampsController } from './camps.controller';
import { CampsResolver } from './camps.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camp } from './entities/camp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Camp])],
  controllers: [CampsController],
  providers: [CampsResolver, CampsService],
})
export class CampsModule {}
