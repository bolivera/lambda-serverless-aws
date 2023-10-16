const {validatePokemon} = require("../../../utils/validation");
const PokemonService = require('../../../services/pokemonService');

const createPokemon = async (event) => {
    try {
        const validationResult = validatePokemon(JSON.parse(event.body));
        if (validationResult.error) {
            return {status: 400, body: {error: validationResult.error.details[0].message}};
        }
        const {name, type, evolution} = JSON.parse(event.body);
        const pokemons = await PokemonService.createPokemon(name, type, evolution);
        return {
            status: 201,
            body: {
                pokemons,
                message: 'Pokémon creado exitosamente'
            }
        };
    } catch (error) {
        return {
            status: 500,
            body: {error: 'Ocurrió un error al crear el Pokémon'}
        };
    }
}

module.exports = {createPokemon};