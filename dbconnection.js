var db = require("mysql");
var con = db.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo_database",
});

module.exports = con;
