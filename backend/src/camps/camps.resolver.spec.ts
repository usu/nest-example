import { Test, TestingModule } from '@nestjs/testing';
import { CampsResolver } from './camps.resolver';
import { CampsService } from './camps.service';

describe('CampsResolver', () => {
  let resolver: CampsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampsResolver, CampsService],
    }).compile();

    resolver = module.get<CampsResolver>(CampsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
