import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagazinesService } from './magazines/magazines.service';
import { MagazinesController } from './magazines/magazines.controller';
import { MagazinesModule } from './magazines/magazines.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'admin1994',
      database: 'revistasnest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true
    }),
    UsersModule,
    MagazinesModule
  ],
  controllers: [AppController, MagazinesController],
  providers: [AppService, MagazinesService],
})
export class AppModule {}
