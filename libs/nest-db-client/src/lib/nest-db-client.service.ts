import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/schema-leoapi/client/leoapi'

@Injectable()
export class DbClientService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
      await this.$connect()
  }
}
