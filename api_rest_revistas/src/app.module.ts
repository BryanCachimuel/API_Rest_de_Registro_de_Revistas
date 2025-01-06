import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevistasModule } from './revistas/revistas.module';

@Module({
  imports: [RevistasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
