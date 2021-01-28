const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/taza', (req, res) => {
      connection.query(`SELECT * FROM y_view_all_tazas`, (err, result) => {
         res.send(result);
      });
   });

   app.post('/taza/byid', (req, res) => {
      connection.query(`CALL z_get_taza_by_id(${req.body.data.id})`,
      (err, result) => {
         res.send({err: err, res: result[0][0]});
      });
   });

   app.post('/taza', function (req, res) {
      let data = req.body.data;
      connection.query(`CALL z_agregar_ingreso_taza("${data.modelo}", ${data.costoVenta}, ${data.idCalidadTaza}, "${data.calidad}", ${data.idColorTaza}, "${data.colorTxt}", ${data.idDimensionTaza}, ${data.alto}, ${data.ancho}, ${data.altoAgarre}, ${data.idCapacidadTaza}, ${data.capacidad}, ${data.idMaterialTaza}, "${data.material}", ${data.stock})`, 
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
};