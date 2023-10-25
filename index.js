//Express server setup
let express = require('express');
let app = express();

//Serve public folder
app.use(express.static('public'));

//Step 2. HTTP Server


//Listen
let port = 3000;
app.listen(port, () => {
  console.log('Server is listening on localhost: ' + port);
});
