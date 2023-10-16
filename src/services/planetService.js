const PlanetRepository = require('../repositories/planetRepository');
const Planet = require('../models/planetModel');


class PlanetService {

    static createPlanet( newPlanet ) {
        PlanetRepository.create(newPlanet);
    }
}

module.exports = PlanetService;