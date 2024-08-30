import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./role.decorator";

// export class TokenDTO {
//   id: number
//   role: Role
// }

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()
    const { role, id } = req.token

    const clearances = await this.reflector.getAllAndOverride(
      'roles',
      [ context.getHandler(), context.getClass() ]
    )

    if( clearances.indexOf(role) > -1 ) return true
    
    throw new UnauthorizedException()

  }
}