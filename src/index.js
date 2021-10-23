
const express = require('express');
const cors = require('cors');
const app = express();

//Funciones de procesamiento
app.use(express.json());
//uso de cors
app.use(cors());

// Configuracion del servidor
app.set('port', process.env.PORT || 3100);

// Routes
//app.use(require('./router/cliente'));
require('./routes/pais')(app);
app.get('*', (req, res) => res.status(200).send({
     message: 'Welcome to the beginning of nothingness.',
}));

// Inicializar servidor
app.listen(app.get('port'), () => {
    console.log("Good Job!");
});