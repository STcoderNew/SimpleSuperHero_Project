import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  // Mock the SuperheroesService
  const mockSuperheroesService = {
    createSuperhero: jest.fn(),
    getSuperheroes: jest.fn(),
    deleteSuperhero: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        { provide: SuperheroesService, useValue: mockSuperheroesService },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createSuperhero', () => {
    it('should create a superhero', async () => {
      const createSuperheroDto = { name: 'Superman', superpower: 'Flight', humilityScore: 10 };
      mockSuperheroesService.createSuperhero.mockResolvedValue(createSuperheroDto);

      const result = await controller.addSuperhero(createSuperheroDto);
      expect(result).toEqual(createSuperheroDto);
      expect(mockSuperheroesService.createSuperhero).toHaveBeenCalledWith(
        createSuperheroDto.name,
        createSuperheroDto.superpower,
        createSuperheroDto.humilityScore,
      );
    });
  });

  describe('getSuperheroes', () => {
    it('should return a list of superheroes', async () => {
      const superheroes = [
        { id: '1', name: 'Superman', superpower: 'Flight', humilityScore: 10 },
        { id: '2', name: 'Batman', superpower: 'Wealth', humilityScore: 8 },
      ];
      mockSuperheroesService.getSuperheroes.mockResolvedValue(superheroes);

      const result = await controller.getSuperheroes();
      expect(result).toEqual(superheroes);
      expect(mockSuperheroesService.getSuperheroes).toHaveBeenCalled();
    });
  });

  describe('deleteSuperhero', () => {
    it('should delete a superhero by id', async () => {
      const heroId = '1';
      const deletedHero = { id: '1', name: 'Superman', superpower: 'Flight', humilityScore: 10 };
      mockSuperheroesService.deleteSuperhero.mockResolvedValue(deletedHero);

      const result = await controller.deleteSuperhero(heroId);
      expect(result).toEqual(deletedHero);
      expect(mockSuperheroesService.deleteSuperhero).toHaveBeenCalledWith(heroId);
    });
  });
});
