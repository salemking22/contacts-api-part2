const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Contacts API',
            version: '1.0.0',
            description: 'API for managing contacts',
        },
    },
    apis: ['./routes/*.js'], // This tells Swagger to look inside your routes folder
};

const specs = swaggerJsdoc(options);

module.exports = [swaggerUi.serve, swaggerUi.setup(specs)];