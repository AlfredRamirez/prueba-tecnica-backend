const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/capacidad-taza', (req, res) => {
      connection.query('SELECT * FROM e_capacidad_taza', (err, result) => {
         res.send(result);
      });
   });

   app.post('/capacidad-taza', (req, res) => {
      let data = req.body.data;
      connection.query(`CALL z_agregar_capacidad_taza(${data.capacidad})`,
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
};
