// tests/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return a message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Practica creada por erwing Coss, Pruebas unitarias con GitHub Actions y tambien protected branch en main.!');
    });
});

afterAll((done) => {
    app.close(() => {
      done();
    });
  });