import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SalariesService {
  constructor(private prisma: PrismaService) {}
  create(createSalaryDto: CreateSalaryDto) {
    return 'This action adds a new salary';
  }

  async getAllTableSalaries(id: number | undefined) {
    let salariesWithUsers: any[];

    if (Number(id) === 0) {
      salariesWithUsers = await this.prisma.salary.findMany({
        include: {
          users: true,
        },
      });
    } else {
      salariesWithUsers = await this.prisma.salary.findMany({
        where: {
          users: {
            company_id: Number(id),
          },
        },
        include: {
          users: true,
        },
      });
    }

    return salariesWithUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} salary`;
  }

  update(id: number, updateSalaryDto: UpdateSalaryDto) {
    return `This action updates a #${id} salary`;
  }

  remove(id: number) {
    return `This action removes a #${id} salary`;
  }
}
