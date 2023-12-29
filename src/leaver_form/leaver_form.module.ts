import { Module } from '@nestjs/common';
import { LeaverFormService } from './leaver_form.service';
import { LeaverFormController } from './leaver_form.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [LeaverFormController],
  providers: [LeaverFormService, PrismaService],
})
export class LeaverFormModule {}
