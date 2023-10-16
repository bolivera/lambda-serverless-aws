
const PokemonService = require('../../../services/pokemonService');
const { validatePokemon } = require('../../../utils/validation')

const updatePokemon = async (event) => {
    try {
		const { pokemonId } = event.pathParameters;
        const dataPokemon = { ...JSON.parse(event.body) };
		const validationResult = validatePokemon(dataPokemon);
		if (validationResult.error) {
			return { status: 400, body: { error: validationResult.error.details[0].message } };
		}
        const existingPokemon = await PokemonService.getPokemonById(pokemonId);
        if (!existingPokemon) {
            return { status: 404, body: { error: 'Pokémon no encontrado' } };
        }
		const pokemons = await PokemonService.updatePokemon(pokemonId, dataPokemon);
		return {
			status: 204, 
			body: { message: 'Pokémon actualizado exitosamente' }
		};
	} catch (error) {
		return {
			status: 500, 
			body: { error: 'Ocurrió un error al crear el Pokémon' }
		};
	}
}
module.exports = { updatePokemon };