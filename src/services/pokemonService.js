const PokemonRepository = require('../repositories/pokemonRepository');
const Pokemon = require('../models/pokemonModel');
const { v4: uuidv4 } = require('uuid');

class PokemonService {

    static getAllPokemons() {
        return PokemonRepository.getAll();
    }

    static getPokemonById(id) {
        console.log(PokemonRepository.getById(id));
        return PokemonRepository.getById(id);
    }

    static createPokemon(name, type, evolution) {
        const id = uuidv4()
        const newPokemon = new Pokemon(id, name, type, evolution);
        PokemonRepository.create(newPokemon);
    }

    static updatePokemon(id, updatedPokemon) {
        PokemonRepository.update(id, updatedPokemon);
    }

    static deletePokemon(id) {
        PokemonRepository.delete(id);
    }
}

module.exports = PokemonService;