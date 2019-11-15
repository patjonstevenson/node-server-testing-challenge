const request = require('supertest');

const server = require('../api/server');

describe('content router', () => {
    describe('POST /', () => {
        it('should respond with new content object', async () => {
            const content = {
                title: "test post",
                body: "this is a pretend post, testing the post functionality of the content router"
            };
            const newContent = await request(server).post('/api/').send(content);
            return expect(newContent.body.title).toBe("test post");
        });
        it('should respond with JSON formatted response', async () => {
            const content = {
                title: "test post",
                body: "this is a pretend post, testing the post functionality of the content router"
            };
            const newContent = await request(server).post('/api/').send(content);
            return expect(newContent.type).toMatch(/json/i);
        })

    });
    describe('DELETE /:id', () => {
        it('should respond with deleted object', async () => {
            const content = {
                title: "test post",
                body: "testing delete"
            };
            const newContent = await request(server).post('/api/').send(content);
            console.log(newContent.body.id);
            const newId = newContent.body.id;
            const deleted = await request(server).delete(`/api/${newId}`);

            console.log(deleted.status);
            return expect(deleted.body).toEqual(newContent.body);
        });
        it('should respond with status 200 OK', async () => {
            const content = {
                title: "test post 2",
                body: "testing delete"
            };
            const newContent = await request(server).post('/api/').send(content);
            const newId = newContent.body.id;
            const deleted = await request(server).delete(`/api/${newId}`);

            return expect(deleted.status).toBe(200);
        });
    })
})