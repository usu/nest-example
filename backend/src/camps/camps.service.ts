import { Injectable } from '@nestjs/common';
import { CreateCampDto } from './dto/create-camp.dto';
import { UpdateCampDto } from './dto/update-camp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Camp } from './entities/camp.entity';

@Injectable()
export class CampsService {
  constructor(@InjectRepository(Camp) private repository: Repository<Camp>) {}

  create(createCampDto: CreateCampDto) {
    const camp = new Camp();

    camp.name = createCampDto.name;
    camp.title = createCampDto.title;
    camp.motto = createCampDto.motto;

    return this.repository.save(camp);
  }

  findAll(): Promise<Camp[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Camp> {
    return this.repository.findOne(id);
  }

  async update(id: string, updateCampDto: UpdateCampDto) {
    const camp = await this.repository.findOne(id);

    Object.assign(camp, updateCampDto);
    await this.repository.save(camp);

    return camp;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
