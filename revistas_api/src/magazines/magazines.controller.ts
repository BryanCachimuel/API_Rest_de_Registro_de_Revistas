import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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
    getMagazines() {
        return this.magazinesService.getMagazines();
    }

    @Get(':id')
    getMagazine(@Param('id', ParseIntPipe) id:number){
        return this.magazinesService.getMagazine(id);
    }

}
