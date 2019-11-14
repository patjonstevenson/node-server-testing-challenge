const request = require('supertest');

const server = require('./server');

it('should set DB_ENV to testing', () => {
    expect(process.env.DB_ENV).toBe("testing");
});

describe('server', () => {
    describe('GET /', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/');
            return expect(res.status).toBe(200);
        });
        it('should return JSON formatted response', async () => {
            const res = await request(server).get('/');
            return expect(res.type).toMatch(/json/i);
        })
    });
});