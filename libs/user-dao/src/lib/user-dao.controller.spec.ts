import { Test } from '@nestjs/testing';
import { UserDaoController } from './user-dao.controller';
import { UserDaoService } from './user-dao.service';

describe('UserDaoController', () => {
  let controller: UserDaoController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserDaoService],
      controllers: [UserDaoController],
    }).compile();

    controller = module.get(UserDaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
