import { Injectable } from '@nestjs/common';
import { CreatePeriodInput } from './dto/create-period.input';
import { UpdatePeriodInput } from './dto/update-period.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Period } from './entities/period.entity';

@Injectable()
export class PeriodsService {
  constructor(
    @InjectRepository(Period) private repository: Repository<Period>,
  ) {}

  create(createPeriodDto: CreatePeriodInput) {
    const period = new Period();

    period.description = createPeriodDto.description;
    period.start = createPeriodDto.start;
    period.end = createPeriodDto.end;

    return this.repository.save(period);
  }

  findAll(): Promise<Period[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Period> {
    return this.repository.findOne(id);
  }

  async update(id: number, updatePeriodDto: UpdatePeriodInput) {
    const period = await this.repository.findOne(id);

    Object.assign(period, updatePeriodDto);
    await this.repository.save(period);

    return period;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
