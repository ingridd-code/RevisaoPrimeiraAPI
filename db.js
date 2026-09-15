const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "turmads1b",
    porta: 3306

});

module.exports = conexao;