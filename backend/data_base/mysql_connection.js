const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectarse a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conectado a la base de datos con ID: ' + connection.threadId);
});