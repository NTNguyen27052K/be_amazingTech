export class CreateUserDto {
  user_name: string;
  email: string;
  phone: string;
  password: string;
  user_deleted: boolean;
  position_id: number;
  company_id: number;
  department_id: number;
  roles_name: string;
  constructor(
    user_name: string,
    email: string,
    phone: string,
    password: string,
    user_deleted: boolean,
    position_id: number,
    company_id: number,
    department_id: number,
    roles_name: string,
  ) {
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
