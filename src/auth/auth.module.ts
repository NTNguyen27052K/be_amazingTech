import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { RoleGuard } from './rbac/guards/roles.guard';
import { AccessControlService } from './rbac/shared/access-control.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JwtService,
    RoleGuard,
    JwtService,
    AccessControlService,
  ],
})
export class AuthModule {}
