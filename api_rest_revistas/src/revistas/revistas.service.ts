import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

    async getRevista(id:number){
        try {
            const revista = await this.prisma.revista.findFirst({
                where:{
                    id
                }
            })
            if(revista) return revista;
            throw new NotFoundException(`La revista con el id ${id} no fue encontrada`)
        } catch (error) {
            if(error instanceof NotFoundException)
                throw new NotFoundException(error.message)
            if(error instanceof Error)
                throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
