import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  addSampleData(): void {
    for (let i = 0; i <= 10; i++) {
      const user = new User();
      user.name = 'User ' + i;
      user.balance = i * 30;

      this.userRepository.save(user);
    }
  }

  registerNewUser(name: string, initialBalance: number): Promise<User> {
    const userDto = new UserDto();
    userDto.name = name;
    userDto.balance = initialBalance;

    return this.userRepository.save(userDto);
  }

  findUserByName(name: string): Promise<User> {
    return this.userRepository.findOneBy({ name: name });
  }

  deleteUserByName(name: string): Promise<DeleteResult> {
    return this.userRepository.delete({ name });
  }

  deleteUserById(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id: id });
  }
}
