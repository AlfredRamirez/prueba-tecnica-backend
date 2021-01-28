const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/color-taza', (req, res) => {
      connection.query('SELECT * FROM c_color_taza', (err, result) => {
         res.send(result);
      });
   });

   app.post('/color-taza', (req, res) => {
      let data = req.body.data;
      connection.query(`CALL z_agregar_color_taza("${data.colorTxt}")`,
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
};