const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.post('/orden-compra', (req, res) => {
      console.log(req.body.data);
      connection.query(`CALL z_agregar_orden_compra(${req.body.data.idTaza}, ${req.body.data.cantidad}, ${req.body.data.oferta})`,
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
}