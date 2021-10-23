const paisController = require('../controller/pais');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/pais/crearPais', paisController.create);
   app.get('/pais/buscarPaises', paisController.list);
   app.get('/pais/buscarPais', paisController.findById);
   app.delete('/pais/eliminarPais', paisController.delete);
   app.put('/pais/actualizarPais', paisController.update);

};