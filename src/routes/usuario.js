const dbConnection = require('../config/dbConnection');

module.exports = app => {

   const connection = dbConnection();

   app.get('/usuario', (req, res) => {
      connection.query('SELECT * FROM a_usuario', (err, result) => {
         res.send(result);
      });
   });
};
