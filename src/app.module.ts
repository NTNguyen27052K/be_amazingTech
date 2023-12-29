import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { CompaniesModule } from './companies/companies.module';
import { PositionModule } from './position/position.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LeaverFormModule } from './leaver_form/leaver_form.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    PositionModule,
    DepartmentsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LeaverFormModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
