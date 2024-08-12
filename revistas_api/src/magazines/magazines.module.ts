import { Module } from '@nestjs/common';
import { MagazinesService } from './magazines.service';
import { MagazinesController } from './magazines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magazine } from './magazine.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Magazine]), UsersModule],
  providers: [MagazinesService],
  controllers: [MagazinesController],
})
export class MagazinesModule {}
