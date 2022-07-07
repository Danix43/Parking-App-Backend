import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('api/v1/parking/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<User> {
    return this.userService.findUserByName(name);
  }

  @Post('newUser')
  async registerNewUser(@Body() payload: UserDto): Promise<User> {
    return this.userService.registerNewUser(payload);
  }

  @Delete('name/:name')
  async deleteUserByName(@Param('name') name: string): Promise<DeleteResult> {
    return this.userService.deleteUserByName(name);
  }

  @Delete('id/:id')
  async deleteUserById(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUserById(id);
  }
}
