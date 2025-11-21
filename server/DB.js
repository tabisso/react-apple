//Database connection module

// db.jsx
const mysql = require("mysql2/promise");
require("dotenv").config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,      
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

});
export default pool;

// module.exports = pool;

