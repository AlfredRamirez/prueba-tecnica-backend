const app = require('./config/server');

// router directory
require('./routes/usuario')(app);
require('./routes/taza')(app);
require('./routes/calidad-taza')(app);
require('./routes/color-taza')(app);
require('./routes/dimension-taza')(app);
require('./routes/capacidad-taza')(app);
require('./routes/material-taza')(app);
require('./routes/orden-compra')(app);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});