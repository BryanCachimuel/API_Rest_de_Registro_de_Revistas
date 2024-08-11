import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MegazinesService } from './magazines/megazines.service';
import { MagazinesController } from './magazines/magazines.controller';
import { MegazinesModule } from './magazines/megazines.module';


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
    MegazinesModule
  ],
  controllers: [AppController, MagazinesController],
  providers: [AppService, MegazinesService],
})
export class AppModule {}
