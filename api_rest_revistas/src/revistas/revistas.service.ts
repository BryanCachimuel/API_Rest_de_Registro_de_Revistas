import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRevistaDto } from './dto/create-revista.dto';
import { UpdateRevistaDto } from './dto/update-revista.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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

    async createRevista(revista: CreateRevistaDto){
        try {
            const nuevaRevista = await this.prisma.revista.create({
                data:{
                    titulo: revista.titulo,
                    descripcion: revista.descripcion,
                    editorial: revista.editorial
                }
            })
            return nuevaRevista;
        } catch (error) {
            if(error instanceof Error)
                throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async updateRevista(id: number, data: UpdateRevistaDto){
        try {
            const updateRevista = await this.prisma.revista.update({
                where:{
                    id
                },
                data:{
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    editorial: data.editorial
                }
            })
            return updateRevista;
        } catch (error) {
            /* en caso de que se ingrese un id que no existe prisma va a dar un error de esté tipo y por ende se realizá esta validación */
            if(error instanceof PrismaClientKnownRequestError)
                throw new NotFoundException(`La revista con el id ${id} no fue encontrada`)
            if(error instanceof Error)
                throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deteleRevista(id: number){
        try {
            const deleteRevista = await this.prisma.revista.delete({
                where: {
                    id
                }
            })
            return deleteRevista;
        } catch (error) {
            /* en caso de que se ingrese un id que no existe prisma va a dar un error de esté tipo y por ende se realizá esta validación */
            if(error instanceof PrismaClientKnownRequestError)
                throw new NotFoundException(`La revista con el id ${id} no fue encontrada`)
            if(error instanceof Error)
                throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
