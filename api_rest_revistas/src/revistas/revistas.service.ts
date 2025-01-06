import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RevistasService {
    
    constructor(private prisma: PrismaService){}

    async getRevistas(){
        try {
            const revistas = await this.prisma.revista.findMany()
            return revistas;
        } catch (error) {
            if(error instanceof Error)
                throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
