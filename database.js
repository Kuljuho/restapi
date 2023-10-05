const mysql = require('mysql2');
const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'studentAdmin',
    password: 'studentPass',
    database: 'studentdbX'
})