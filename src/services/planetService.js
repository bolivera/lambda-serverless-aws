const PlanetRepository = require('../repositories/planetRepository');

class PlanetService {

    static createPlanet( newPlanet ) {
        PlanetRepository.create(newPlanet);
    }
}

module.exports = PlanetService;