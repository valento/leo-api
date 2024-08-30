import { Module } from '@nestjs/common'
import { UserDaoController } from './user-dao.controller'
import { UserDaoService } from './user-dao.service'
import { DbClientModule } from '@leo-api/nest-db-client'
import { JwtService } from '@nestjs/jwt'
// import { AuthGuard } from './guards/auth.guard'

@Module({
  imports: [
    DbClientModule
  ],
  controllers: [UserDaoController],
  providers: [UserDaoService],
  exports: [UserDaoService],
})
export class UserDaoModule {}
