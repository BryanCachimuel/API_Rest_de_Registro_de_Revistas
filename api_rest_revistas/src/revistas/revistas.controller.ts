import { Controller, Get } from '@nestjs/common';
import { RevistasService } from './revistas.service';

@Controller('revistas')
export class RevistasController {

    constructor(private revistasService: RevistasService){}

    @Get()
    async getRevistas(){
        return await this.revistasService.getRevistas()
    }

}
