const { validatePokemon } = require("../utils/validation");
const PokemonService = require('../services/pokemonService');
const { createPokemon } = require('../public/api/v1/createPokemon');

jest.mock("../utils/validation");
jest.mock('../services/pokemonService');

describe('createPokemon', () => {
    it('should return a 201 status and a success', async () => {
        validatePokemon.mockReturnValue({ error: null });
        const mockCreatedPokemon = { name: 'Pikachu', type: 'Electric', evolution: 'Raichu' };
        PokemonService.createPokemon.mockResolvedValue(mockCreatedPokemon);
        const request = {
            body: JSON.stringify(mockCreatedPokemon),
        };
        const response = await createPokemon(request);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({
            pokemons: mockCreatedPokemon,
            message: 'Pokémon creado exitosamente',
        });
    });

    it('should return a 400 status and a validation error message when invalid data is provided', async () => {
        validatePokemon.mockReturnValue({
            error: {
                details: [{
                    message: 'Validation error message'
                }]
            }
        });
        const invalidData = { name: 'Invalid Pokémon' };
        const request = {
            body: JSON.stringify(invalidData),
        };
        const response = await createPokemon(request);
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Validation error message' });
    });

    it('should return a 500 status on internal server error', async () => {
        PokemonService.createPokemon.mockRejectedValue(new Error('Ocurrió un error'));
        const request = { name: 'Pikachu', type: 'Electric', evolution: 'Raichu' };
        const response = await createPokemon(request);
       expect(response.statusCode).toBe(500);
       expect(response.body).toEqual({ error: 'Ocurrió un error al crear el Pokémon' }); 
    });

});
