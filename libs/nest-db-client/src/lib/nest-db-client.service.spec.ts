import { Test } from '@nestjs/testing';
import { NestDbClientService } from './nest-db-client.service';

describe('NestDbClientService', () => {
  let service: NestDbClientService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestDbClientService],
    }).compile();

    service = module.get(NestDbClientService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
