module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'TEST-INDRA',
        version: '1.0.0',
        description: 'API para listar servicios Species - Planetas',
    },
    paths: {
        '/api/v1/planets/{id}': {
            get: {
                summary: 'Obtener un planeta por ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: {
                            type: 'integer',
                        },
                        description: 'ID del planeta que se desea obtener',
                    },
                ],
                responses: {
                    '200': {
                        description: 'Planeta encontrado correctamente',
                    },
                    '404': {
                        description: 'Planeta no encontrado',
                    },
                    '500': {
                        description: 'Error interno del servidor',
                    },
                },
            },
        },
    },
};
