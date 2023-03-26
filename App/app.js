const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'miNegocio'
});
connection.connect();

connection.query("INSERT INTO clientes (Nombre, RFC, Ciudad, CP, Email) VALUES ('Eve', 'ALME2395281E0', 'Colima',28000, 'eved@ucol.mx')", function (error, results, fields) {
  if (error) {
    throw error;
  } else {
    console.log(results);
    console.log(fields);
  }

});
connection.end();