import { Injectable } from '@nestjs/common';
import { CreateCampInput } from './dto/create-camp.input';
import { UpdateCampInput } from './dto/update-camp.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Camp } from './entities/camp.entity';

@Injectable()
export class CampsService {
  constructor(@InjectRepository(Camp) private repository: Repository<Camp>) {}

  create(createCampInput: CreateCampInput) {
    const camp = new Camp();

    camp.name = createCampInput.name;
    camp.title = createCampInput.title;
    camp.motto = createCampInput.motto;

    return this.repository.save(camp);
  }

  findAll(): Promise<Camp[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Camp> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateCampInput: UpdateCampInput) {
    const camp = await this.repository.findOne(id);

    Object.assign(camp, updateCampInput);
    await this.repository.save(camp);

    return camp;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
