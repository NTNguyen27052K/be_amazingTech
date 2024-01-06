import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  async getAllCompanies() {
    return await this.prisma.companies.findMany();
  }

  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  findAll() {
    return `This action returns all companies`;
  }

  async getAllUsersByCompanyId(id: number | undefined) {
    if (!id || id === 0) {
      return await this.prisma.users.findMany({
        include: {
          companies: true,
          position: true,
          departments: true,
          leave_form: true,
        },
      });
    }

    const usersByCompanyId = await this.prisma.users.findMany({
      where: {
        company_id: id,
      },
      include: {
        companies: true,
        position: true,
        departments: true,
        leave_form: true,
      },
    });

    return usersByCompanyId;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
