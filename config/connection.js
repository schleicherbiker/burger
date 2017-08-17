const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Groundon121!",
  database: "burgers_db"
});

module.exports = connection;