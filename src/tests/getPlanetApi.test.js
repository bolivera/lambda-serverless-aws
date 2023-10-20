const axios = require('axios');
const { getPlanetApi } = require('../public/api/v1/getPlanetApi');
const Planet = require("../models/planetModel");

// Inicio de pruebas unitarias

// Mock axios para simular la solicitud
jest.mock('axios');
describe('getPlanetApi', () => {

  it('should return the planet data when a valid ID is provided', async () => {
    const planetId = 1;
    const mockPlanetData = { name: 'Tatooine', climate: 'Arid', terrain: 'Desert' };
    axios.get.mockResolvedValue({ status: 200, data: mockPlanetData });
    const request = { pathParameters: { id: planetId } };
    const response = await getPlanetApi(request);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(JSON.stringify({ payload: new Planet(mockPlanetData, planetId) }));
  })

  it('should return a 400 status when invalid path parameters are provided', async () => {
    const invalidId = 's';
    const request = { pathParameters: { id: invalidId } };
    const response = await getPlanetApi(request);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(JSON.stringify({ error: 'El campo debe ser un número' }));
  });

  it('should return a 500 status on internal server error', async () => {
    axios.get.mockRejectedValue(new Error('Ocurrió un error'));
    const request = { pathParameters: { id: 1 } };
    const response = await getPlanetApi(request);
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(JSON.stringify({ error: 'Error interno del servidor' }));
  });

});

