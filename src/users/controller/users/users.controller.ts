import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users/message')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(): string {
    return this.usersService.getUser();
  }
}
