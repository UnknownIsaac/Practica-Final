const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

module.exports = router;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all requests
app.use(cors());

app.use('/', router);


const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'Program',
  password: 'Cide2020',
  database: 'LDM',
  autocommit: true
});

router.post('/users', (req, res) => {
  const { nombre, email, pass } = req.body;
  console.log('req.body:', req.body);
  const sql = 'INSERT INTO usuario (nombre, email, pass) VALUES (?, ?, ?)';
  const values = [nombre, email, pass];
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving user to database');
    } else {
      res.status(200).send('User saved to database');
    }
  });
});




connection.connect((err) => {
  connection.query('SELECT * FROM producto', (error, results) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
    this.products = results;
  })
});

app.get('/data', (req, res) => {
  connection.query('SELECT * FROM producto', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
