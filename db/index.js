const mysql = require('mysql');
//import mysql from 'mysql';
//import mysqlConfig from './config.js';
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

const getBoxes = function(callback) {
  const query = 'SELECT * FROM my_box';
  db.query(query, (error, rows) => {
    if (error) {
      throw error;
    } else {
      console.log('getBoxes success in db')
      callback(null, rows);
    }
  })
}

module.exports = {
  getBoxes
}