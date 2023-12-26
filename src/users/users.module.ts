import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { PrismaService } from 'prisma/prisma.service';
import { RoleGuard } from 'src/auth/rbac/guards/roles.guard';
import { AuthGuard } from 'src/auth/rbac/guards/auth.guard';
import { AccessControlService } from 'src/auth/rbac/shared/access-control.service';
import { SharedModule } from 'src/auth/rbac/shared/shared.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    JwtStrategy,
    RoleGuard,
    AuthGuard,
    AccessControlService,
    JwtService,
  ],
})
export class UsersModule {}
