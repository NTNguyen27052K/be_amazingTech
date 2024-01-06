export class User {
  user_id: number;
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
    user_id: number,
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
