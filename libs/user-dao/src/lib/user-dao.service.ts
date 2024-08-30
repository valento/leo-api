import { Injectable } from '@nestjs/common'

import { DbClientService } from '@leo-api/nest-db-client'
import { Prisma } from '.prisma/schema-leoapi/client/leoapi'

@Injectable()
export class UserDaoService {

  constructor(
    private dbClient: DbClientService
  ) {}

  getById = async ( id: number ) => {
    return await this.dbClient.user.findUnique({
      where: { id }
    })
  }

  getAll =  async () => {
    try {
      const result = await this.dbClient.user.findMany()
      
      return {
        success: true,
        data: result
      }
    } catch(err) {
      console.log('Catched Error: ', err);
      
      return {
        success: false,
        data: {message: 'Nothing found...'}
      }
    }
  }

  create = async (data: Prisma.userCreateInput) => {
    try {
      const result = await this.dbClient.user.create({data: data})
      return ({
        success: true,
        message: "Customer created successfully...",
        result
      })
    } catch( err ) {
      return {
        success: false,
        message: err
      }
    }
  }

  // update = async ( id: number, data: Prisma.userUpdateInput ) => {
  //   try {
  //     const result = await this.dbClient.user.update({
  //       where: { id },
  //       data: data
  //     })
  //     return({
  //       success: true,
  //       data: result
  //     })
  //   } catch( err ) {
  //     return({
  //       success: false,
  //       message: 'Forbiden'
  //     })
  //   }
  // }


}
