const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'arhiv',
    connectionLimit: 10
});

module.exports = pool;
