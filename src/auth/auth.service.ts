import { Injectable } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { signupDto } from './dto/signup.dto';

import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: loginDto) {
    try {
      let { email, password } = loginDto;
      let userData = await this.prisma.users.findFirst({
        where: {
          email,
        },
      });

      if (!userData) {
        return 'Email không chính xác';
      }

      if (!(userData.password === password)) {
        return 'Mật khẩu không chính xác';
      }
      return {
        access_token: await this.jwtService.signAsync(userData),
      };
    } catch (error) {
      return { error: error };
    }
  }
}
