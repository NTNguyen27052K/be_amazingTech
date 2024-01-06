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
          position_id: Number(updateUserDto.position_id),
          company_id: Number(updateUserDto.company_id),
          department_id: Number(updateUserDto.department_id),
        },
      });

      return updatedUser;
    } catch (error) {
      throw new Error(`Could not update user deleted status: ${error.message}`);
    }
  }
  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.prisma.users.create({
        data: {
          user_name: createUserDto.user_name,
          email: createUserDto.email,
          phone: createUserDto.phone,
          password: createUserDto.password,
          user_deleted: createUserDto.user_deleted,
          position_id: Number(createUserDto.position_id),
          company_id: Number(createUserDto.company_id),
          department_id: Number(createUserDto.department_id),
          roles_name: createUserDto.roles_name,
        },
      });
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      await this.prisma.$disconnect();
    }
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
