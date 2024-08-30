import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
// import { JwtModule } from "@nestjs/jwt"
import { AuthGuard } from "./guards/auth.guard"

@Module({
  // imports: [
  //   JwtModule.register({
  //     // 
  //   })
  // ],
  // exports: [ AuthService ]
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: AuthGuard
  //   }
  // ]
})

export class AuthModule {}