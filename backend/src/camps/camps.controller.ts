import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CampsService } from './camps.service';
import { CreateCampInput } from './dto/create-camp.input';
import { UpdateCampInput } from './dto/update-camp.input';

@Controller('camps')
export class CampsController {
  constructor(private readonly campsService: CampsService) {}

  @Post()
  create(@Body() createCampInput: CreateCampInput) {
    return this.campsService.create(createCampInput);
  }

  @Get()
  findAll() {
    return this.campsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampInput: UpdateCampInput) {
    return this.campsService.update(+id, updateCampInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campsService.remove(+id);
  }
}
