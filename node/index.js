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




const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'Program',
  password: 'Cide2020',
  database: 'LDM',
  autocommit: true
});

app.post('/LogIn', (req, res) => {
  const { email, password } = req.body;
  console.log('req.body:', req.body);
  const sql = `select email,pass from usuario where email='${email}'`;
  connection.query(sql, (error, results) => {
    console.log('result:', results);
    if (error) {
      // res.status(500).json({ redirect: null });
      return
    }
    console.log(password == results[0].pass)
    if (password == results[0].pass) {
      console.log(password, results[0].pass)
      res.send('Yes');
    }
    else {
      res.status(404).json({ redirect: null });
      console.log('Pass not found')
    }
  })
});


router.post('/Register', (req, res) => {
  const { nombre, email, pass } = req.body;
  console.log('req.body:', req.body);
  const sql = 'INSERT INTO usuario (nombre, email, pass) VALUES (?, ?, ?)';
  const values = [nombre, email, pass];
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving user to database');
    } else {
      console.log(results)
      res.status(200).send('User saved to database');
    }
  });
});

//Primero, click addcart, coger el id de producto seleccionado, ir al node/mysql, hace select*from producto where id = id,
//resultado volver al vue. En front, utiliza el resultado. hace un inser into carrito (categoria, nombre, precio, descrip,id_producto) values (?,?,?,?,?)
//
app.post('/Cart/:id', (req, res) => {
  const id = req.params.id;
  console.log('req.body: ', req.body);
  connection.query('SELECT id, categoria, nombre, precio, descrip FROM producto WHERE id =' + id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error querying product');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('Product not found');
      return;
    }

    const { id_producto, categoria, nombre, precio, descrip } = results[0];
    const sql = 'INSERT INTO carrito (id_producto, categoria, nombre, precio, descrip) VALUES (?, ?, ?, ?, ?)';
    const values = [id_producto, categoria, nombre, precio, descrip];

    connection.query(sql, values, (error, insertResult) => {
      if (error) {
        console.error(error);
        res.status(500).send('Failed to add to cart');
      } else {
        console.log(insertResult);
        res.status(200).send('Added to cart');
      }
    });
  });
});




connection.connect((err) => {
  connection.query('SELECT * FROM producto', (error, results) => {
    console.log('Connected to MySQL database');
    if (err) throw err;
    this.products = results;
  })
});

app.get('/data', (req, res) => {
  connection.query('SELECT * FROM producto', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/detail/:id', (req, res) => {
  const id = req.params.id
  connection.query('SELECT * FROM producto where producto.id=' + id, (err, results) => {
    if (err) throw err;
    console.log('Detail: ' + results[0])
    res.send(results[0]);
  });
});

app.post('/Search/:nombre', (req, res) => {
  const nombre = req.params.nombre
  const search = req.body // {}=objeto , []=array 
  const sql = 'SELECT * FROM producto WHERE producto.nombre LIKE ?';
  const values = [`%${search}%`];
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error executing search query');
    } else {
      res.status(200).send(results);
    }
  });
});



app.use(router);



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
