const { isInvalidEmail, isPayloadEmpty } = require("./validator")

test('valid email', function() {
    const testPayload = {
        name:  "test name",
        email: "test@email.com",
        interests: "test interest 1, test interest 2"
    }
    const result = isInvalidEmail(testPayload);
    expect(result).toBe(false);
})

test('invalid email', function() {
    const testPayload = {
        name:  "test name",
        email: "test.email",
        interests: "test interest 1, test interest 2"
    }
    const result = isInvalidEmail(testPayload);
    expect(result).toBe(true);
})

test('empty payload', function() {
    const testPayload = {}
    const result = isPayloadEmpty(testPayload);
    expect(result).toBe(true);
})

test('non-empty payload', function() {
    const testPayload = {
        name:  "test name",
        email: "test@email.com",
        interests: "test interest 1, test interest 2"
    }
    const result = isPayloadEmpty(testPayload);
    expect(result).toBe(false);
})