// src/superheroes/superheroes.controller.ts
import { Body, Controller, Get, Post, Delete, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  // POST endpoint to add a superhero
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.createSuperhero(
      createSuperheroDto.name,
      createSuperheroDto.superpower,
      createSuperheroDto.humilityScore,
    );
  }

  // GET endpoint to fetch superheroes ordered by humility score
  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }

  // DELETE endpoint to delete a superhero by ID
  @Delete(':id')
  async deleteSuperhero(@Param('id') id: string) {
    return this.superheroesService.deleteSuperhero(id);
  }
}
