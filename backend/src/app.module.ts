import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesService } from './superheroes/superheroes.service';
import { SuperheroesController } from './superheroes/superheroes.controller';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [SuperheroesModule],
  controllers: [AppController, SuperheroesController],
  providers: [AppService, SuperheroesService, PrismaService],
})
export class AppModule {}
