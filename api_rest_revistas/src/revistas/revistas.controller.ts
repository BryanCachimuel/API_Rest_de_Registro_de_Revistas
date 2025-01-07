import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { RevistasService } from './revistas.service';
import { CreateRevistaDto } from './dto/create-revista.dto';

@Controller('revistas')
export class RevistasController {

    constructor(private revistasService: RevistasService){}

    @Get()
    async getRevistas(){
        return await this.revistasService.getRevistas()
    }

    @Get('/:id')
    async getRevista(@Param('id', ParseIntPipe) id: number){
        return await this.revistasService.getRevista(id)
    }

    @Post()
    async createRevista(@Body() data:CreateRevistaDto){
        return await this.revistasService.createRevista(data);
    }

}
