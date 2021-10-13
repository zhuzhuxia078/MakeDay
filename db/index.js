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

const addBox = function(product, callback) {
  // const query = `INSERT INTO my_box (box_name, product_url, price) VALUES ('${product.name}', '${product.product_url}', '${product.price}')`;
  const query = `INSERT INTO my_box (box_name, product_url, price) VALUES ('bronzer', 'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328', '15.99')`;
  db.query(query, (error, row) => {
    if(error) {
      throw error;
    } else {
      console.log('addBox success in db')
      callback(null, row);
    }
  })
}

module.exports = {
  getBoxes,
  addBox
}