const {db} = require('../config/db.config');
const AWS = require('aws-sdk');
const dynamodbInstance = require('../config/DynamoDBSingleton');

class PokemonRepository {
    static async create(pokemon) {
        const dynamodb = dynamodbInstance.getInstance();
       return await dynamodb.put({
            TableName: db.pokemonTable,
            Item: pokemon
        }).promise();
    }

    static async getAll() {
        const dynamodb = dynamodbInstance.getInstance();
        try {
            const vPokemonsItems = await dynamodb.scan({
                TableName: db.pokemonTable
            }).promise();
            return vPokemonsItems.Items;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async getById(id) {
        const dynamodb = dynamodbInstance.getInstance();
        const vPokemons = await dynamodb.get({
            TableName: db.pokemonTable,
            Key: {
                pokemonId: id
            }
        }).promise();
        return vPokemons.Item;
    }

    static async create(pokemon) {
        const dynamodb = dynamodbInstance.getInstance();
        await dynamodb.put({
            TableName: db.pokemonTable,
            Item: pokemon
        }).promise();
    }


    static async update(pokemonId, updatedPokemon) {
        const {name, type, evolution} = updatedPokemon;
        const dynamodb = dynamodbInstance.getInstance();
        await dynamodb.update({
            TableName: db.pokemonTable,
            Key: {pokemonId},
            UpdateExpression: "set #attrName = :name, #attrType = :type, #attrEvolution = :evolution",
            ExpressionAttributeNames: {
                "#attrName": "name",
                "#attrType": "type",
                "#attrEvolution": "evolution",
            },
            ExpressionAttributeValues: {
                ":name": name,
                ":type": type,
                ":evolution": evolution
            },
            ReturnValues: "ALL_NEW"
        }).promise();
    }

    static async delete(pokemonId) {
        const dynamodb = dynamodbInstance.getInstance();
        await dynamodb.delete({
            TableName: db.pokemonTable,
            Key: {pokemonId}
        }).promise();
    }
    
}

module.exports = PokemonRepository;