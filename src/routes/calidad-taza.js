const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/calidad-taza', (req, res) => {
      connection.query('SELECT * FROM b_calidad_taza', (err, result) => {
         res.send(result);
      });
   });

   app.post('/calidad-taza', (req, res) => {
      let data = req.body.data
      connection.query(`CALL z_agregar_calidad_taza("${data.calidad}")`,
      (err, result) => {
         res.send({err: err, res: result});
      })
   });
};