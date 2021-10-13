const express = require('express');
const path = require('path');
const db = require('../db')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

// routes
  // ---- /boxes
app.get('/boxes', (req, res) => {
  db.getBoxes((error, rows) => {
    if (error) {
      throw error;
    } else {
      res.json(rows);
    }
  });
});

app.post('/boxes', (req, res) => {
  const product = req.body;
  db.addBox(product, (error, row) => {
    if (error) {
      throw error;
    } else {
      res.status(201).json(row);
    }
  })
})



app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
});