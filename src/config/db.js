
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;


// to import DB anywhere in project use: 
// import pool from "../config/db.js";