const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/material-taza', (req, res) => {
      connection.query('SELECT * FROM f_material_taza', (err, result) => {
         res.send(result);
      });
   });

   app.post('/material-taza', (req, res) => {
      let data = req.body.data;
      connection.query(`CALL z_agregar_material_taza("${data.material}")`,
      (err, result) => {
         res.send({err: err, res: result});
      });
   });
};
