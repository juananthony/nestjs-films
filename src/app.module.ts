import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsController } from './films/films.controller';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [FilmsModule],
  controllers: [AppController, FilmsController],
  providers: [AppService],
})
export class AppModule {}
