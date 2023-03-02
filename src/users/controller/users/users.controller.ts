import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('message')
  getUser(): string {
    return this.usersService.getUser();
  }
}
