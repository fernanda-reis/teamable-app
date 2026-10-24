function isInvalidEmail(userObject) {
    const isValid = userObject.email.includes("@") && userObject.email.includes(".com");
    return !isValid;
}

function isPayloadEmpty(userObject) {
    return Object.keys(userObject).length === 0;
}

module.exports = {
    isInvalidEmail,
    isPayloadEmpty
};