const PokemonService = require('../../../services/pokemonService');

const getPokemon = async (event) => {
	try {
        const { pokemonId }  = event.pathParameters
		const pokemon = await PokemonService.getPokemonById(pokemonId);
        if (!pokemon) {
            return { status: 404, body: { error: 'Pokémon no encontrado' } };
        }
        return {
            status: 200,
            body: {
                pokemon
            }
        };
	} catch (error) {
		return {
			status: 500, 
			body: { error: 'Internal Server Error' }
		};
	}
}
module.exports = { getPokemon };