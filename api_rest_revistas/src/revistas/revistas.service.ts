import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RevistasService {
    
    constructor(private prisma: PrismaService){}

    
}
