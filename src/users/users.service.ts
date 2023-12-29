import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return await this.prisma.users.findMany({
      include: {
        companies: true,
        position: true,
        departments: true,
      },
    });
  }
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.prisma.users.update({
        where: { user_id: Number(id) },
        data: {
          user_name: updateUserDto.user_name,
          email: updateUserDto.email,
          phone: updateUserDto.phone,
          password: updateUserDto.password,
          user_deleted: updateUserDto.user_deleted,
          position_id: updateUserDto.position_id,
          company_id: updateUserDto.company_id,
          department_id: updateUserDto.department_id,
        },
      });

      return updatedUser;
    } catch (error) {
      throw new Error(`Could not update user deleted status: ${error.message}`);
    }
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
