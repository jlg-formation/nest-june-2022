import { Test, TestingModule } from '@nestjs/testing';
import { CoucouService } from './coucou.service';

describe('CoucouService', () => {
  let service: CoucouService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoucouService],
    }).compile();

    service = module.get<CoucouService>(CoucouService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
