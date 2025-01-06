import { Module } from '@nestjs/common';
import { RevistasController } from './revistas.controller';
import { RevistasService } from './revistas.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RevistasController],
  providers: [RevistasService, PrismaService]
})
export class RevistasModule {}
