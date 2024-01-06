import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { CompaniesModule } from './companies/companies.module';
import { PositionModule } from './position/position.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';

import { LeaverFormModule } from './leaver_form/leaver_form.module';
import { SalariesModule } from './salaries/salaries.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    PositionModule,
    DepartmentsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LeaverFormModule,
    SalariesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
