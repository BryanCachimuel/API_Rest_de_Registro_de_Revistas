import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    getUsers(): Promise<User[]>{
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() newUser: CreateUserDTO): Promise<User>{
        return this.userService.createUser(newUser);
    }

}
