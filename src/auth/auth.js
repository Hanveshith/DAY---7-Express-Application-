
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const authToken = Buffer.from(`${username}:${password}`).toString("base64");

module.exports = authToken;