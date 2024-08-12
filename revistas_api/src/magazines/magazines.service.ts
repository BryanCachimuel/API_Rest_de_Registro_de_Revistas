import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Magazine } from './magazine.entity';
import { Repository } from 'typeorm';
import { CreateMagazineDto } from './dto/create-magazine.dto';

@Injectable()
export class MagazinesService {

    constructor(
        @InjectRepository(Magazine) private magazinesRepository: Repository<Magazine>,
        private usersService: UsersService
    ){}

    async createMagazine(magazine: CreateMagazineDto) {
        const userFound = await this.usersService.getUser(magazine.authorId);
        if(!userFound) return new HttpException('Usuario No Encontrado', HttpStatus.NOT_FOUND);

        const newMagazine = this.magazinesRepository.create(magazine);
        return this.magazinesRepository.save(newMagazine);
    }

    getMagazines() {
        return this.magazinesRepository.find();
    }

}
