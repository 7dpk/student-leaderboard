"user strict";

const mysql = require("mysql");

//local mysql db connection
const dbConn = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
});
module.exports = dbConn;
