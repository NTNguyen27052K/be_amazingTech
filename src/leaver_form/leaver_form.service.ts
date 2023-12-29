import { Injectable } from '@nestjs/common';
import { CreateLeaverFormDto } from './dto/create-leaver_form.dto';
import { UpdateLeaverFormDto } from './dto/update-leaver_form.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LeaverFormService {
  constructor(private prisma: PrismaService) {}
  create(createLeaverFormDto: CreateLeaverFormDto) {
    return 'This action adds a new leaverForm';
  }

  async getAllLeaveFormsByCompanyId(id: number) {
    try {
      const leaveForms = await this.prisma.leave_form.findMany({
        where: {
          users: {
            company_id: Number(id),
          },
        },
        include: {
          users: true,
        },
      });
      return leaveForms;
    } catch (error) {
      throw new Error(`Error retrieving leave forms: ${error}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} leaverForm`;
  }

  async updateLeaverForm(id: number, updateLeaverFormDto: UpdateLeaverFormDto) {
    try {
      const updatedUser = await this.prisma.leave_form.update({
        where: { Leave_form_id: Number(id) },
        data: updateLeaverFormDto,
      });

      return updatedUser;
    } catch (error) {
      throw new Error(`Could not update user deleted status: ${error.message}`);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} leaverForm`;
  }
}
