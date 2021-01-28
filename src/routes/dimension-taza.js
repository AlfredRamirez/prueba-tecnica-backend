const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/dimension-taza', (req, res) => {
      connection.query('SELECT * FROM d_dimension_taza', (err, result) => {
         res.send(result);
      });
   });

   app.post('/dimension-taza', (req, res) => {
      let data = req.body.data;
      connection.query(`CALL z_agregar_dimension_taza(${data.alto}, ${data.ancho}, ${data.altoAgarre})`,
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
};
