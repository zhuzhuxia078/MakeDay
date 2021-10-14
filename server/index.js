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
  console.log('test get in server')
  db.getBoxes((error, rows) => {
    if (error) {
      throw error;
    } else {
      res.json(rows);
    }
  });
});

app.post('/boxes', (req, res) => {
  console.log('req.body', req.body)
  const product = req.body;
  db.addBox(product, (error, row) => {
    console.log(req.body);
    if (error) {
      throw error;
    } else {
      res.status(201).json(row);
    }
  })
})

app.delete('/boxes/:id', (req, res) => {
  console.log('delete req.params.id', req.params.id)
  db.deleteItem(req.params.id, (err, row) => {
    if(err) {
      console.log('error in delete query', err);
      return
    }
    res.json(row[0]);
  })
})



app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
});