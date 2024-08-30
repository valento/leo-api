import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
// import { JwtService } from "@nestjs/jwt"
import { Request } from "express"

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(
  //   // private jwt: any//JwtService
  // ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()
    const token = this.extractToken(req)
    
    if(!token) throw new UnauthorizedException()
      
    req.token = token
    
    return true

  }

  extractToken( req: Request ): {role: string, id: string} | undefined {
    const [ type, token, id ] = req.headers.authorization?.split(' ') ?? []
    
    return type === 'Bearer' ? {role: token, id: id} : undefined
  }
}