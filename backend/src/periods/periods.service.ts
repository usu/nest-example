import { Injectable } from '@nestjs/common';
import { CreatePeriodInput } from './dto/create-period.input';
import { UpdatePeriodInput } from './dto/update-period.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Period } from './entities/period.entity';
import { Camp } from '../camps/entities/camp.entity';

@Injectable()
export class PeriodsService {
  constructor(
    @InjectRepository(Period) private repository: Repository<Period>,
    @InjectRepository(Camp) private campRepository: Repository<Camp>,
  ) {}

  async create(createPeriodDto: CreatePeriodInput) {
    const period = new Period();

    const { description, start, end, campId } = createPeriodDto;
    period.description = description;
    period.start = start;
    period.end = end;
    period.camp = await this.campRepository.findOne(campId);

    return this.repository.save(period);
  }

  findAll(): Promise<Period[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Period> {
    return this.repository.findOne(id);
  }

  findByCamp(campId: number): Promise<Period[]> {
    return this.repository.find({
      where: {
        camp: campId,
      },
      relations: ['camp'],
    });
  }

  async update(id: number, updatePeriodDto: UpdatePeriodInput) {
    const period = await this.repository.findOne(id);

    Object.assign(period, updatePeriodDto);
    console.log(period);
    await this.repository.save(period);

    return period;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
