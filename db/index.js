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

const getPrice = function(callback) {
  const query = 'SELECT SUM(price) FROM my_box';
  db.query(query, (error, row) => {
    if (error) {
      console.log('get price error: ', error)
    } else {
      console.log('get price success in db')
      callback(null, row);
    }
  })
}

const addBox = function(product, callback) {
  const query = `INSERT INTO my_box (box_name, product_url, date, price) VALUES ('${product.box_name}', '${product.product_url}', '${product.date}', '${product.price}')`;
  // const query = `INSERT INTO my_box (box_name, product_url, price) VALUES ('${product.box_name}', '${product.product_url}', '15.99')`;
  // const query = `INSERT INTO my_box (box_name, product_url, price) VALUES ('bronzer', 'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328', '15.99')`;
  db.query(query, (error, row) => {
    if(error) {
      throw error;
    } else {
      console.log('addBox success in db')
      callback(null, row);
    }
  })
}

const getById = (ID, callback) => {
  const query = `SELECT * FROM my_box WHERE ID=${ID}`;
  db.query(query, (error, row) => {
    if(error) {
      console.log('failed getting by ID', error);
    } else {
      callback(null, row);
    }
  })
}

const deleteItem = (productId, callback) => {
  getById(productId, (err, row) => {
    if (err) {
      console.log('failed getting product by ID', err)
      callback(err, null);
      return;
    }
    const query = `DELETE FROM my_box WHERE ID=${productId}`;
    db.query(query, (err) => {
    if (err) {
      console.log(`error deleting product with id ${productId}`, err)
      return;
      }
      callback(null, row);
    })
  })
}

module.exports = {
  getBoxes,
  addBox,
  deleteItem,
  getPrice
}