const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RABBIT.inhole20!',
    database: 'anona',
    port: 3306
})

module.exports = connection