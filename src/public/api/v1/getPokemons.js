const PokemonService = require('../../../services/pokemonService');

const getPokemons = async (event) => {
	try {
		const pokemons = await PokemonService.getAllPokemons();
		if (pokemons.length === 0) {
			return {
				status: 204,
				body: { message: 'No hay pokémones disponibles' }
			};
		} else {
			return {
				status: 200,
				body: {
					pokemons
				}
			};
		}
	} catch (error) {
		return {
			status: 500, 
			body: { error: 'Internal Server Error' }
		};
	}
}
module.exports = { getPokemons };