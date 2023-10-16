const AWS = require('aws-sdk');

class DynamoDBSingleton {
    constructor() {
        if (!DynamoDBSingleton.instance) {
            this.dynamodb = new AWS.DynamoDB.DocumentClient();
            DynamoDBSingleton.instance = this;
        }
        return DynamoDBSingleton.instance;
    }
    getInstance() {
        return this.dynamodb;
    }
}
const dynamodbSingleton = new DynamoDBSingleton();

module.exports = dynamodbSingleton;