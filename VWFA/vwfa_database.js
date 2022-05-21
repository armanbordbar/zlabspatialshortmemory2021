var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const vwfa_DBSOURCE = path.join(__dirname + '/vwfa_db.sqlite');
let vwfa_db = new sqlite3.Database(vwfa_DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the VWFA SQLite database.');
    }
});

module.exports = vwfa_db;