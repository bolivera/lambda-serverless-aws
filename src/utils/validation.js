const Joi = require('joi');

const customMessages = {
  'string.base': 'El campo debe ser una cadena de texto',
  'string.empty': 'El campo no puede estar vacío',
  'string.required': 'El campo es obligatorio',
  'number.base': 'El campo debe ser un número',
  'number.required': 'El campo es obligatorio',
  'object.required': 'El campo es obligatorio',
};


const validPlanet = Joi.object({
  id: Joi.number().required().messages(customMessages),
});

const validateEspecies = Joi.object({
  id: Joi.number().required().messages(customMessages),
});

const validateNewSpecies = Joi.object({
  name: Joi.string().required(),
  classification: Joi.string().required(),
  designation: Joi.string(),
  average_height: Joi.string(),
  skin_colors: Joi.string(),
  hair_colors: Joi.string(),
  eye_colors: Joi.string(),
  average_lifespan: Joi.string(),
  language: Joi.string(),
  created: Joi.string(),
  edited: Joi.string(),
  homeworld: Joi.string()
});

module.exports = {
  validateEspecies: (data) => validateEspecies.validate(data),
  validateNewSpecies: (data) => validateNewSpecies.validate(data),
  validatePlanet: (data) => validPlanet.validate(data)
};