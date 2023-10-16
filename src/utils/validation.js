const Joi = require('joi');

const pokemonSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  evolution: Joi.string()
});

const validPlanet = Joi.object({
  id: Joi.number().required()
});


module.exports = {
  validatePokemon: (data) => pokemonSchema.validate(data),
  validatePlanet: (data) => validPlanet.validate(data)
};