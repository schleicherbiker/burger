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
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: (tableName, updateCol, updateVal, colName, colVal) => {
        const queryString = "UPDATE ? SET ? = ? WHERE ? = ?";
        connection.query(queryString, [tableName, updateCol, updateVal, colName, colVal], (err, res) => {
            if (err) throw err;
            console.log(res);
            return res;
        })
    }
}
