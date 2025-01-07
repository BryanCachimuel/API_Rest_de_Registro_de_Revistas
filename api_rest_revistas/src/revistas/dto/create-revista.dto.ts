import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateRevistaDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    titulo: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descripcion: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    editorial:string
}