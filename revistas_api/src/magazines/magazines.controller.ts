import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMagazineDto } from './dto/create-magazine.dto';
import { MagazinesService } from './magazines.service';

@Controller('magazines')
export class MagazinesController {

    constructor(
        private magazinesService: MagazinesService
    ){}

    @Post()
    createPost(@Body() magazine: CreateMagazineDto ) {
        return this.magazinesService.createMagazine(magazine);
    }

    @Get()
    getMagazine() {
        return this.magazinesService.getMagazines();
    }

}
