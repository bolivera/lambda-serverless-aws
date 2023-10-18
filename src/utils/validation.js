const Joi = require('joi');

const customMessages = {
  'string.base': 'El campo debe ser una cadena de texto',
  'string.empty': 'El campo no puede estar vacío',
  'string.required': 'El campo es obligatorio',
  'number.base': 'El campo debe ser un número',
  'number.required': 'El campo es obligatorio',
  'object.required': 'El campo es obligatorio',
};


const pokemonSchema = Joi.object({
  name: Joi.string().required().messages(customMessages),
  type: Joi.string().required().messages(customMessages),
  evolution: Joi.string().messages(customMessages),
});

const validPlanet = Joi.object({
  id: Joi.number().required().messages(customMessages),
});



module.exports = {
  validatePokemon: (data) => pokemonSchema.validate(data),
  validatePlanet: (data) => validPlanet.validate(data)
};