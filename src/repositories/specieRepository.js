

const {db} = require('../config/db.config');
const dynamodbInstance = require('../config/DynamoDBSingleton');

class specieRepository {

    static async create(specie) {
        const dynamodb = dynamodbInstance.getInstance();
       await dynamodb.put({
            TableName: db.specieTable,
            Item: specie
        }).promise();
    }

    static async getAll() {
        const dynamodb = dynamodbInstance.getInstance();
        try {
            const vSpeciesItems = await dynamodb.scan({
                TableName: db.specieTable
            }).promise();
            return vSpeciesItems.Items;
        } catch (error) {
            console.error('Error:', error);
            throw error; 
        }
    }

}

module.exports = specieRepository;
