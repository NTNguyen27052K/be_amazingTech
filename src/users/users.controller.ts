import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/role/roles.guard';
import { Roles } from 'src/auth/role/roles.decorator';
import { Role } from 'src/auth/role/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('/get-users')
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('/updateUsers/:id')
  updateUsers(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.updateUser(id, updateUserDto);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        return { message: 'Không có quyền truy cập!' };
      }
      throw error; // Re-throw các lỗi khác không phải là UnauthorizedException
    }
  }

  @UseGuards(AuthGuard)
  @Post('/createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
