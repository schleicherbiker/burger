if (process.env.JAWSDB_URL) {
  const connection = require('mysql').createConnection(process.env.JAWSDB_URL);
   connection.connect((err) => {
    if (err) throw err;
      console.log("Connected as ID: " + connection.threadId);
    });

    module.exports = connection;
} else {
  const connection = require('mysql').createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Groundon121!",
    database: "burgers_db"
  });

  connection.connect((err) => {
  if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
  });

  module.exports = connection;
}

