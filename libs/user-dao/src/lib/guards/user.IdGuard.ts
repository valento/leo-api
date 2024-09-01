import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { Reflector } from "@nestjs/core"

@Injectable()
export class IdGuard implements CanActivate {

  constructor(
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()
    const { id, role } = req.token
    const method = req.method

    const requested_id = req.params.id

    if( method === 'DELETE' && id === requested_id ) throw new UnauthorizedException()
    if( role !== 'admin' && id !== requested_id ) throw new UnauthorizedException()
    
    return true

  }
}