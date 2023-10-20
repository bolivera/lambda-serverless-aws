const axios = require("axios");

const { validateEspecies } = require("../../../utils/validation");
const { api } = require("../../../config/db.config");
const Species = require("../../../models/SpeciesModel");
const SpecieService = require("../../../services/specieService");

const getSpecies = async (event) => {
  try {
    const { id } = event.pathParameters;
    const validationResult = validateEspecies(event.pathParameters);
    if (validationResult.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: validationResult.error.details[0].message,
        }),
      };
    }

    const { swapi } = api;
    const url = swapi + `/species/${id}`;
    const response = await axios.get(url);
    const status = response.status;
    const { data } = await response;

    if (status == 200) {
       var specie = new Species(data, id);
      try {
        await SpecieService.createSpecie(specie);
      } catch (error) {
        console.error(error);
      }
    }
    return {
      statusCode: status,
      body: JSON.stringify({
        payload: specie,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};

module.exports = { getSpecies };
