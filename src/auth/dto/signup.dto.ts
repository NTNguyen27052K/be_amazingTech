import { ApiProperty } from '@nestjs/swagger';

export class signupDto {
  @ApiProperty()
  taiKhoan: string;

  @ApiProperty()
  hoTen: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  soDT: string;

  @ApiProperty()
  matKhau: string;
  constructor(
    tai_khoan: string,
    hoTen: string,
    email: string,
    soDT: string,
    mat_khau: string,
  ) {
    tai_khoan;
    hoTen;
    email;
    soDT;
    mat_khau;
  }
}
