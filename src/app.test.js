const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('test default endpoint', function() {
    it("should return a valid response", async function() {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello to IIT-J and family");
    });
});
