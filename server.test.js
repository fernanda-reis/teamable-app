const { app, server } = require('./server');
const request = require('supertest');

test('test request with valid payload', async function() {
    const testPayload = {
        name:  "test name",
        email: "test@email.com",
        interests: "test interest 1, test interest 2"
    }

    const response = await request(app)
                    .post('/update-profile')
                    .send(testPayload);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("info");
    expect(response.body.info).toBe("user profile data updated successfully");
    
    server.close();
})

test('test request with invalid payload', async function() {
    const testPayload = {
        name:  "test name",
        email: "test.email",
        interests: "test interest 1, test interest 2"
    }
    const response = await request(app)
                    .post('/update-profile')
                    .send(testPayload);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Invalid email format.");

    server.close();
})

test('test request with empty payload', async function() {
    const testPayload = {}

    const response = await request(app)
                    .post('/update-profile')
                    .send(testPayload);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Empty payload. Couldn't update user profile data.");

    server.close();
})