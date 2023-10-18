const PokemonRepository = require('../repositories/pokemonRepository');
const Pokemon = require('../models/pokemonModel');
const { v4: uuidv4 } = require('uuid');

class PokemonService {

    static getAllPokemons() {
        return PokemonRepository.getAll();
    }

    static async getPokemonById(id) {
        return  await PokemonRepository.getById(id);
    }

    static async createPokemon(name, type, evolution) {
        const id = uuidv4()
        const newPokemon = new Pokemon(id, name, type, evolution);
        return await PokemonRepository.create(newPokemon);
    }

    static async updatePokemon(id, updatedPokemon) {
        return await PokemonRepository.update(id, updatedPokemon);
    }

    static async deletePokemon(id) {
        return await PokemonRepository.delete(id);
    }
}

module.exports = PokemonService;