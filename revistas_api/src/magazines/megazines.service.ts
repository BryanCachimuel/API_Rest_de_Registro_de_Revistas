import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Magazine } from './magazine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MegazinesService {

    constructor(
        @InjectRepository(Magazine) private magazinesRepository: Repository<Magazine>,
        private usersService: UsersService
    ){}

   

}
