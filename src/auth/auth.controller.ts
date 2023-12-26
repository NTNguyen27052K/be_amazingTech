import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { loginDto } from './dto/login.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    type: loginDto,
  })
  @Post('/login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }

  // @Post('/signup')
  // signup(@Body() signupDto: signupDto) {
  //   return this.authService.signup(signupDto);
  // }
}
