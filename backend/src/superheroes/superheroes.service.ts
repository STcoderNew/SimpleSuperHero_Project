// src/superheroes/superheroes.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface Superhero {
  id: string; // Add id field here to match the model
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  constructor(private readonly prisma: PrismaService) {}

  // Method to create a new superhero
  async createSuperhero(name: string, superpower: string, humilityScore: number) {
    return this.prisma.superhero.create({
      data: { name, superpower, humilityScore },
    });
  }

  // Method to get superheroes ordered by humility score
  async getSuperheroes() {
    return this.prisma.superhero.findMany({
      orderBy: { humilityScore: 'desc' },
    });
  }

  // Method to delete a superhero by ID
  async deleteSuperhero(id: string) {
    return this.prisma.superhero.delete({
      where: { id },
    });
  }
}
