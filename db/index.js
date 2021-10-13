//const mysql = require('mysql');
import mysql from 'mysql';
import mysqlConfig from './config.js';
//const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

/* query functions */

module.exports = {
  /* query function */
}