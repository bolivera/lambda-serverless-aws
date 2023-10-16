

const {db} = require('../config/db.config');
const dynamodbInstance = require('../config/DynamoDBSingleton');

class PlanetRepository {

    static async getById(id) {
        const dynamodb = dynamodbInstance.getInstance();
        try {
            return await dynamodb.get({TableName: db.planetTable,Key: {id} }).promise();
        } catch (error) {
            console.error('Error:', error);
        }
    }
    static async create(planet) {
        const dynamodb = dynamodbInstance.getInstance();
        await dynamodb.put({
            TableName: db.planetTable,
            Item: planet
        }).promise();
    }

    


}

module.exports = PlanetRepository;