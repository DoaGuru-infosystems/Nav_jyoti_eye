const mysql = require('mysql2/promise');
require('dotenv').config();

async function alterTable() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'navjyoti_db'
    });

    const alterTableQuery = `
      ALTER TABLE admins ADD COLUMN email VARCHAR(255) UNIQUE AFTER username;
    `;

    // Ignore error if column already exists
    try {
        await connection.query(alterTableQuery);
        console.log('Added email column to admins table.');
    } catch (e) {
        if (e.code === 'ER_DUP_FIELDNAME') {
            console.log('Email column already exists.');
        } else {
            throw e;
        }
    }
    
    await connection.end();
  } catch (error) {
    console.error('Error altering admins table:', error);
  }
}

alterTable();
