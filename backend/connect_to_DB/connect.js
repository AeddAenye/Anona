const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RABBIT.inhole20!',
    database: 'anona',
    port: 3306
})

connection.connect((err) => {
    if (err) {
        return console.log(`Ошибка: ${err.message}`)
    }
    console.log('Соединение установлено')
})

module.exports = connection