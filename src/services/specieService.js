const SpecieRepository = require("../repositories/specieRepository");
const Specie = require("../models/SpeciesModel");
const { v4: uuidv4 } = require("uuid");

class SpecieService {
  static createSpecie(
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
    edited
  ) {
    const id = uuidv4();
    const newSpecie = new Specie(
      id,
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
      edited
    );
    SpecieRepository.create(newSpecie);
  }

  static getAllSpecies() {
    return SpecieRepository.getAll();
  }
}

module.exports = SpecieService;
