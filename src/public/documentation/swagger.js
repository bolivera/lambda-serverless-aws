const fs = require('fs');
const yaml = require('js-yaml');

const swaggerDoc = {
    openapi: '3.0.0',
    info: {
        title: 'Mi API',
        version: '1.0.0',
        description: 'Descripción de mi API',
    },
    paths: {},
};


exports.handler = async () => {
    fs.writeFileSync('swagger-definition.yaml', yaml.dump(swaggerDoc));
};
