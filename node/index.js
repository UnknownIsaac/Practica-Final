//Importar los modulos que necesita el proyecto;
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



//Conectar a base de datos mysql
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'Program',
  password: 'Cide2020',
  database: 'LDM',
  autocommit: true
});

//Manejar el request  post de front(LOG IN)
app.post('/LogIn', (req, res) => {
  //Recibir el valor que viene de front. Lo introducir al constante 'email' y 'password'
  const { email, password } = req.body;
  //Imprimir el valor a la consola(de back-end. No los va ver en la consola de front)
  console.log('req.body:', req.body);
  //un constante de un sentencia sql para buscar en el base de datos a ver si hay mismo email.
  const sql = `select email,pass from usuario where email='${email}'`;
  //Aqui hace la consulta con metodo .query(sql), contiene dos parametros(casos que puede ocurrir): hay un error=> imprimir el error en la cosola(de backend). 
  //Result=> Sí hay resulta de esta consulta. Contiene todos los valores del resultado de la consulta  (return un array) 
  connection.query(sql, (error, results) => {
    console.log('result:', results);
    if (error) {
      console.log(error)
      return
    }
    //Imprimir en la console el resultado de comparacion. Si password que introduce no es igual que el que tiene en BD, imprimir false. Si no True.  
    console.log(password == results[0].pass)
    //Comparacion de password, si el condicion es True: imprimir los en la consola y enviar un String 'Yes' al front como un res.data. Si no imprimir 'Pass not found'
    if (password == results[0].pass) {
      console.log(password, results[0].pass)
      res.send('Yes');
    }
    else {
      res.status(404).json({ redirect: null });
      console.log('Password not found')
    }
  })
});

//Manejar post request que viene el front(Registro)
router.post('/Register', (req, res) => {
  //3 constantes para guardar los valores que viene el front. 
  const { nombre, email, pass } = req.body;
  //Los imprime
  console.log('req.body:', req.body);
  //sentencia de sql. para introducir los valores al base de datos 
  const sql = 'INSERT INTO usuario (nombre, email, pass) VALUES (?, ?, ?)';
  const values = [nombre, email, pass];
  //Ejecutar el sentencia
  connection.query(sql, values, (error, results) => {
    //Control de errores.
    if (error) {
      console.error(error);
      res.status(500).send('Error saving user to database');
    } else {
      console.log(results)
      res.status(200).send('User saved to database');
    }
  });
});


//Manejar el request get de front(carrito). El id viene como un parametro. 
app.get('/Cart/:id', (req, res) => {
  //Crear un constante ID(back.const) para guardar el id(front.param)
  const id = req.params.id;
  //Imprime para ver si ha guardado o no.
  console.log('req.body: ', req.body);
  //Ejecutar la consulta. Aqui puede crear un const sql = 'SELECT id, categoria, nombre, precio, descrip FROM producto WHERE id =' para tener separado. 
  //Esta consulta busca en el base de datos el producto que contiene el valor de id(que viene de front). Return ese obj. 
  connection.query('SELECT id, categoria, nombre, precio, descrip FROM producto WHERE id =' + id, (err, results) => {
    //Control de errores
    if (err) {
      console.error(err);
      res.status(500).send('Error querying product');
      return;
    }
    //Si la consulta no hay resultado (es decir no ha encontrado el producto con ese id), envia 'Product not found' al front(como un res.data).
    if (results.length === 0) {
      res.status(404).send('Product not found');
      return;
    }
    //crear 5 constantes para guardar los valaores de resultado de anterios consulta
    const { id_producto, categoria, nombre, precio, descrip } = results[0];
    //sentencia sql=>insert los valores a la tabla carrito
    const sql = 'INSERT INTO carrito (categoria, nombre, precio, descrip, id_producto) VALUES (?, ?, ?, ?, ?)';
    const values = [categoria, nombre, precio, descrip, id_producto,];
    //Ejecutar la consulta
    connection.query(sql, values, (error, insertResult) => {
      //Control de errores
      if (error) {
        console.error(error);
        res.status(500).send('Failed to add to cart');
      } else {
        console.log(insertResult);
        //Ejecutar una consulta de sacar todos los datos de tiene la tabla carrito
        connection.query('SELECT * FROM carrito', (err, results) => {
          //Control de errores
          if (err) {
            console.error(err);
            res.status(500).send('Error querying cart');
          } else {
            res.status(200).json(results);
          }
        });
      }
    });
  });
});

//Manejar el request post que viene el front(Carrito.Checkout)
app.post('/Checkout', (req, res) => {
  //2 sentencias. 
  //La primera para eliminar la tabla carrito, la segunda para volver crearlo
  //(BOZ no puedo eliminar todos los datos que contiene la table. Unica forma es eliminar la table)
  const sql1 = 'DROP TABLE IF EXISTS carrito';
  const sql2 = `CREATE TABLE IF NOT EXISTS carrito (
    id INT unsigned auto_increment PRIMARY KEY,
    categoria varchar(50) not null,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    descrip TEXT,
    cantidad int unsigned,
    id_producto int unsigned,
    foreign key(id_producto) references producto(id)
  )`;
  //Ejecutar la consulta 1
  connection.query(sql1, (error, result1) => {
    //Control de errores
    if (error) {
      console.error(error);
      res.status(500).send('Error dropping carrito table');
      return;
    }
    //Ejecutar la consulta 2
    connection.query(sql2, (error, result2) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating carrito table');
        return;
      }

      res.status(200).send('Carrito table created');
    });
  });
});



/*Lo comento a ver si funciona. Si deja de funcionar, dejarlo descomentao

//Aqui no hay ni post ni get. Solo es un conexión al base de datos 
connection.connect((err) => {
  connection.query('SELECT * FROM producto', (error, results) => {
    console.log('Connected to MySQL database');
    if (err) throw err;
    this.products = results;
  })
});

app.get('/Producto', (req, res) => {
  connection.query('SELECT * FROM producto', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
*/


//Manejar el request get de front(detalle y contien un id como parametro)
app.get('/detail/:id', (req, res) => {
  //Crear un constante ID(back.const) para guardar el id(front.param)
  const id = req.params.id
  //Ejecutar la consulta 
  connection.query('SELECT * FROM producto where producto.id=' + id, (err, results) => {
    //Control de errores
    if (err) throw err;
    console.log('Detail: ' + results[0])
    res.send(results[0]);
  });
});

//Manejar el request post de front (Search, esta en app.vue)
app.post('/Search/:nombre', (req, res) => {
    //Crear un constante nombre(back.const) para guardar el valor de nombre(front.param)
  const nombre = req.params.nombre
  const search = req.body // {}=objeto , []=array 
  const sql = 'SELECT * FROM producto WHERE producto.nombre LIKE ?';
  const values = [`%${search}%`];
  //Ejecutar la consulta
  connection.query(sql, values, (error, results) => {
    //Control de errores
    if (error) {
      console.error(error);
      res.status(500).send('Error executing search query');
    } else {
      res.status(200).send(results);
    }
  });
});


//Usar el modulo router 
app.use(router);


//El servidor node, su puerta es 3000. 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
