const mysql = require('mysql2/promise')

// Configura la conexión con la base de datos
mysql
  .createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .then((connection) => {
    console.log('Conectado a la base de datos con ID: ' + connection.threadId)
    global.mysql = connection
  })
  .catch((e) =>
    console.log('Error al conectarse a la base de datos: ' + e.stack)
  )
