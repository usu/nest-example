import { Test, TestingModule } from '@nestjs/testing';
import { CampsController } from './camps.controller';
import { CampsService } from './camps.service';

describe('CampsController', () => {
  let controller: CampsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampsController],
      providers: [CampsService],
    }).compile();

    controller = module.get<CampsController>(CampsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
