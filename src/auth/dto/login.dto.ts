import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  constructor(email: string, password: string) {
    email;
    password;
  }
}
