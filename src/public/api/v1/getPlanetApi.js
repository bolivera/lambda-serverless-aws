const axios = require("axios");

const { validatePlanet } = require("../../../utils/validation");
const { api } = require("../../../config/db.config");
const Planet = require("../../../models/planetModel");
const PlanetService = require("../../../services/planetService");

const getPlanetApi = async (event) => {
  try {
    const { id } = event.pathParameters;
    const validationResult = validatePlanet(event.pathParameters);
    if (validationResult.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: validationResult.error.details[0].message,
        }),
      };
    }

    const { swapi } = api;
    const url = swapi + `/planets/${id}`;
    const response = await axios.get(url);
    const status = response.status;
    const { data } = await response;
    if (status == 200) {
      var planet = new Planet(data, id);
      try {
        await PlanetService.createPlanet(planet);
      } catch (error) {
        console.error(error);
      }
    }
    return {
      statusCode: status,
      body: JSON.stringify({
        payload: planet,
      }),
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};

module.exports = { getPlanetApi };
