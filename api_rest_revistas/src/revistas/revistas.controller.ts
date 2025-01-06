import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RevistasService } from './revistas.service';

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

}
