const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Enable CORS for all requests
app.use(cors());
  
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'Program',
    password: 'Cide2020',
    database: 'tienda'
});

connection.connect((err) => {
    connection.query('SELECT * FROM producto', (error, results) => {
        if (err) throw err;
        console.log('Connected to MySQL database');
        this.products = results;
    })
    // connection.end();
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
