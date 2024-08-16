import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateMagazineDto } from './dto/create-magazine.dto';
import { MagazinesService } from './magazines.service';
import { UpdateMagazineDto } from './dto/update-magazine.dto';

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

    @Patch(':id')
    updateMagazine(@Param('id', ParseIntPipe) id:number, @Body() magazine: UpdateMagazineDto){
        return this.magazinesService.updateMagazine(id,magazine);
    }

}
