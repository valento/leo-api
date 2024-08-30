import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { UserDaoService } from './user-dao.service'

import { Prisma } from '.prisma/schema-leoapi/client/leoapi'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Role, Roles } from './guards/role.decorator'
import { AuthGuard } from './guards/auth.guard'
import { RoleGuard } from './guards/user.RoleGuard'
import { request } from 'http'

// ApiBearerAuth('dafaultBearerAuthorizationToken')
@ApiTags('user')
@Controller('user')
export class UserDaoController {
  constructor(
    private service: UserDaoService
  ) {}

  @ApiBearerAuth('dafaultBearerAuthorizationToken')
  @UseGuards(AuthGuard, RoleGuard)
  @Get('/:id')
  @Roles(Role.ADMIN, Role.USER)
  async getOneById(
    @Param('id') id: string
  ) {
    return this.service.getById(Number(id))
  }

  @ApiBearerAuth('dafaultBearerAuthorizationToken')
  @UseGuards(AuthGuard, RoleGuard)
  @Get()
  // Atach role-metadata to the route
  @Roles(Role.ADMIN)
  async getAll() {    
    return this.service.getAll()
  }

  @Post('create')
  async create(
    @Body() data: Prisma.userCreateInput
  ) {
    console.log(data)
    
    return this.service.create(data)
  }

  @ApiBearerAuth('dafaultBearerAuthorizationToken')
  @UseGuards(AuthGuard, RoleGuard)
  @Put('update/:id')
  @Roles(Role.ADMIN, Role.USER)
  async update(@Param('id') id: string) {
    return this.service.create
  }
}
