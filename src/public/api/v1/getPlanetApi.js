const axios = require('axios');

const { validatePlanet } = require('../../../utils/validation')
const { api } = require('../../../config/db.config');
const Planet = require("../../../models/planetModel");
const PlanetService = require("../../../services/planetService");

const getPlanetApi = async (event) => {
    try {
        const { id } = event.pathParameters
        const validationResult = validatePlanet(event.pathParameters);
        if (validationResult.error) {
            return { statusCode: 400, body: { error: validationResult.error.details[0].message } };
        }

        const { swapi } = api;
        const url = swapi + `/planets/${id}`;
        const response = await axios.get(url)
        const status = response.status
        const { data } = await response;
        if (status == 200) {
            planet = new Planet(data, id);
            return {
                statusCode: status,
                body: JSON.stringify(
                    {
                        payload: planet
                    }
                )
            }
        }

        return {
            statusCode: status,
            body: { error: "Se presentaron problemas al consultar los datos"}
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        };
    }
}

const guadarPlaneta = async (planet) => {
    try {
        await PlanetService.createPlanet(planet);
    } catch (error) {
        console.log(error)
    }
};
module.exports = { getPlanetApi };