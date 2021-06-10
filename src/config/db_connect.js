require("dotenv").config();

module.exports = function db() {
  const connect = {
    host: process.env.DBHOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    connectionLimit: parseInt(process.env.DBPOOLMAX, 10),
    queueLimit: 0,
    multipleStatements: true,
  };
  return connect;
};
