const { validateNewSpecies } = require("../../../utils/validation");
const SpecieService = require("../../../services/specieService");

const createSpecie = async (event) => {
  try {
    let eventBody = JSON.parse(event.body);
    const validationResult = validateNewSpecies(eventBody);
    if (validationResult.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: validationResult.error.details[0].message,
        }),
      };
    }
    const {
      name,
      classification,
      designation,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan,
      language,
      created,
      edited,
    } = JSON.parse(event.body);

    const specieData = {
      name,
      classification,
      designation,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
      average_lifespan,
      language,
      created,
      edited,
    };

    const species = await SpecieService.createSpecie(specieData);
    return {
      status: 201,
      body: {
        species,
        message: "Specie creado exitosamente",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: "Error interno del servidor" },
    };
  }
};
module.exports = { createSpecie };
