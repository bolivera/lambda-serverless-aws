# SERVERLESS, SERVICIOS AWS Y API SWAPI

Este proyecto es una aplicación Serverless construida con servicios de AWS (Lambda, API Gateway, DynamoDB) que ofrece funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) para administrar datos de Pokémon. Además, aprovecha la API SWAPI (Star Wars API) para recuperar información sobre planetas. A continuación, se describe en detalle los componentes clave y la funcionalidad:

## Instalación
El código fuente se encuentra en el directorio src.

La estructura de carpetas se ha basado en el patrón de diseño de repositorio. Se han creado carpetas para servicios, modelos y repositorios. De igual manera, se han creado dos carpetas de configuración adicionales donde se encuentra la configuración de las tablas y la ruta de SWAPI, y finalmente, la carpeta pública donde se encuentran los manejadores para cada una de las invocaciones.

Se ha creado un CRUD utilizando el framework Serverless con servicios de AWS (Lambda, API Gateway y DynamoDB), y se han configurado otros servicios adicionales con IAM.

### Pasos de instalación
1. Instala las dependencias con `npm install`.
2. Configura y otorga los permisos en la consola de AWS.
3. Configura tu entorno ingresando tus credenciales de __AWS_ACCESS_KEY_ID__ y __AWS_SECRET_ACCESS_KEY__.
4. Ejecuta el comando `npm run dev` para ejecutar el proyecto en un entorno de desarrollo local con el servidor local (serverless-offline).

## Puntos de Acceso (Endpoints)

Algunas consideraciones al realizar pruebas:

1. **BASE_URL:** _https://omhwddsb1do5.execute-api.us-west-2.amazonaws.com_
2. **UID:** _Este es un identificador único de un Pokémon en DynamoDB_.

## Implementación (Deploy)
Para implementar la aplicación en AWS, ejecuta el comando `npm run deploy`. Esto creará funciones Lambda, configurará API Gateway y configurará tablas DynamoDB según la configuración definida en el framework Serverless.

## Servicios de AWS Utilizados
- Lambda
- API Gateway
- DynamoDB
