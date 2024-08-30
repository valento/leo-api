import { Module } from '@nestjs/common';
import { DbClientService } from './nest-db-client.service';

@Module({
  controllers: [],
  providers: [DbClientService],
  exports: [DbClientService],
})
export class DbClientModule {}
