const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Configuración de CORS
// const corsOptions = {
//   origin: 'http://localhost:3000', // Cambia esto según la dirección de tu aplicación de React
//   optionsSuccessStatus: 200, // Algunas opciones adicionales
// };

app.use(cors(corsOptions));

// Configura la conexión a tu base de datos MySQL (reemplaza con tus propios datos de conexión).
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'agenda',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

app.post('/registro', async (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  // Verifica si el correo ya está registrado en la base de datos.
  const consulta = 'SELECT * FROM usuarios WHERE correo = ?';
  db.query(consulta, [correo], async (error, resultados) => {
    if (error) {
      console.error('Error al consultar la base de datos:', error);
      return res.status(500).json({ message: 'Error en la base de datos' });
    }

    if (resultados.length > 0) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    // Hashea la contraseña antes de almacenarla.
    const hashedContrasena = await bcrypt.hash(contrasena, 10);

    // Inserta el nuevo usuario en la base de datos.
    const nuevoUsuario = { nombre, correo, contrasena: hashedContrasena };
    db.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err) => {
      if (err) {
        console.error('Error al insertar el usuario en la base de datos:', err);
        return res.status(500).json({ message: 'Error en la base de datos' });
      }
      res.status(201).json({ message: 'Usuario registrado con éxito.' });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
