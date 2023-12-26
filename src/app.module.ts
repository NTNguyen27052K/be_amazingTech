import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { CompaniesModule } from './companies/companies.module';
import { PositionModule } from './position/position.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './auth/rbac/guards/roles.guard';
import { AuthGuard } from './auth/rbac/guards/auth.guard';
import { SharedModule } from './auth/rbac/shared/shared.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    PositionModule,
    DepartmentsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
