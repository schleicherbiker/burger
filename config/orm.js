const connection = require("./connection.js");

module.exports = {
    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    
    insertOne: (tableName, colNames, colValues, cb) => {
        const queryString = "INSERT INTO " + tableName + " (" + (colNames.join(", ")) + ") VALUES(" + colValues.join(", ") + ")";
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: (tableName, objColVals, condition, cb) => {
        const queryString = "UPDATE " + tableName + " SET " + objToSql(objColVals) + " WHERE " + condition;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}