import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;
  let prismaService: PrismaService;

  // Mock the PrismaService
  const mockPrismaService = {
    superhero: {
      create: jest.fn(),
      findMany: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createSuperhero', () => {
    it('should create a superhero', async () => {
      const newHero = { name: 'Superman', superpower: 'Flight', humilityScore: 10 };
      mockPrismaService.superhero.create.mockResolvedValue(newHero);

      const result = await service.createSuperhero('Superman', 'Flight', 10);
      expect(result).toEqual(newHero);
      expect(mockPrismaService.superhero.create).toHaveBeenCalledWith({
        data: newHero,
      });
    });
  });

  describe('getSuperheroes', () => {
    it('should return a list of superheroes', async () => {
      const superheroes = [
        { id: '1', name: 'Superman', superpower: 'Flight', humilityScore: 10 },
        { id: '2', name: 'Batman', superpower: 'Wealth', humilityScore: 8 },
      ];
      mockPrismaService.superhero.findMany.mockResolvedValue(superheroes);

      const result = await service.getSuperheroes();
      expect(result).toEqual(superheroes);
      expect(mockPrismaService.superhero.findMany).toHaveBeenCalledWith({
        orderBy: { humilityScore: 'desc' },
      });
    });
  });

  describe('deleteSuperhero', () => {
    it('should delete a superhero by id', async () => {
      const heroId = '1';
      const deletedHero = { id: '1', name: 'Superman', superpower: 'Flight', humilityScore: 10 };
      mockPrismaService.superhero.delete.mockResolvedValue(deletedHero);

      const result = await service.deleteSuperhero(heroId);
      expect(result).toEqual(deletedHero);
      expect(mockPrismaService.superhero.delete).toHaveBeenCalledWith({
        where: { id: heroId },
      });
    });
  });
});
