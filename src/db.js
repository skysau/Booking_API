const Pool = require("pg").Pool;

const pools = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'booking',
    passowrd:'Saurabh321',
    port: 5432,
});

module.exports =pools;