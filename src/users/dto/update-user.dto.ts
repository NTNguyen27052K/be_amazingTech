import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  user_id: number;
  user_name: string;
  email: string;
  phone: string;
  password: string;
  user_deleted: boolean;
  position_id: number;
  company_id: number;
  department_id: number;
  roles_name: number;
  constructor(
    user_id: number,
    user_name: string,
    email: string,
    phone: string,
    password: string,
    user_deleted: boolean,
    position_id: number,
    company_id: number,
    department_id: number,
    roles_name: number,
  ) {
    user_id;
    user_name;
    email;
    phone;
    password;
    user_deleted;
    position_id;
    company_id;
    department_id;
    roles_name;
  }
}
