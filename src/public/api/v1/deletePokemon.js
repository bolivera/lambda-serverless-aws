const PokemonService = require('../../../services/pokemonService');

const deletePokemon = async (event) => {
	try {
        const { pokemonId }  = event.pathParameters
		const vPokemon = await PokemonService.getPokemonById(pokemonId);
        if (!vPokemon) {
            return { status: 404, body: { error: 'Pokémon no encontrado' } };
        }
        const deletePokemon = await PokemonService.deletePokemon(pokemonId);
        return {
            status: 204,
            body: { message: 'Pokémon eliminado exitosamente' }
        };
	} catch (error) {
		return {
			status: 500, 
			body: { error: 'Internal Server Error' }
		};
	}
}
module.exports = { deletePokemon };