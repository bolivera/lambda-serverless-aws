const PokemonService = require('../services/pokemonService');
const { getPokemons } = require('../public/api/v1/getPokemons');

jest.mock('../services/pokemonService');

describe('getPokemons', () => {
  it('should return a 204 status and a message when there are no pokémons available', async () => {
    PokemonService.getAllPokemons.mockResolvedValue([]);
    const event = {};
    const result = await getPokemons(event);

    expect(result.status).toBe(204);
    expect(result.body).toEqual({ message: 'No hay pokémones disponibles' });
  });

  it('should return a 200 status and a list of pokémons when there are pokémons available', async () => {
    const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charizard' }];
    PokemonService.getAllPokemons.mockResolvedValue(mockPokemons);
    const event = {};
    const result = await getPokemons(event);
    expect(result.status).toBe(200);
    expect(result.body).toEqual({ pokemons: mockPokemons });
  });

  it('should return a 500 status on internal server error', async () => {
    PokemonService.getAllPokemons.mockRejectedValue(new Error('Ocurrió un error'));
    const event = {};
    const result = await getPokemons(event);
    expect(result.status).toBe(500);
    expect(result.body).toEqual({ error: 'Internal Server Error' });
  });
});
