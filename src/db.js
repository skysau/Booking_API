const Pool = require("pg").Pool;
require('dotenv').config();

const pools = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port: process.env.DB_PORT,
});

module.exports =pools;