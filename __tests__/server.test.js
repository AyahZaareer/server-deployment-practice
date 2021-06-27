'use strict';
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

xtest('adds 2+3 to = 5', () => {
    expect(5).toBe(5);
});


describe('handels invalid req', () => {
    it('handels invalid req', async () => {
        const res = await request.get('/foo');
        expect(res.status).toEqual(404);
    });
    it('handels errors', async () => {
        const res = await request.get('/bad');
        expect(res.status).toEqual(500);
    });
    it('handels correct routes', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
    });
});