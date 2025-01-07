import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Patch } from '@nestjs/common';
import { RevistasService } from './revistas.service';
import { CreateRevistaDto } from './dto/create-revista.dto';
import { UpdateRevistaDto } from './dto/update-revista.dto';

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

    /*@Put('/:id')
    async updateRevista(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRevistaDto){
        return await this.revistasService.updateRevista(id, data)
    }*/

    @Patch('/:id')
    async updateRevista(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRevistaDto){
        return await this.revistasService.updateRevista(id, data)
    }
}
