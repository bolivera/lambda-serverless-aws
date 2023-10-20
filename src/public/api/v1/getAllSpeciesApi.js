const axios = require("axios");
const SpecieService = require("../../../services/specieService");

const getAllSpecies = async (event) => {
  try {
    const species = await SpecieService.getAllSpecies();
    if (species.length === 0) {
      return {
        status: 204,
        body: { message: "No hay datos disponibles" },
      };
    } else {
      return {
        status: 200,
        body: {
          species,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};

module.exports = { getAllSpecies };
