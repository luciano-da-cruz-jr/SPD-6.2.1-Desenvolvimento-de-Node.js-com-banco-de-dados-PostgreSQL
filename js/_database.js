const Client = require('pg').Client
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "postgres"
})

module.exports = client