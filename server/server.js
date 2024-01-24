const express = require('express');
const app = express();
const port = 3003; // You can change this to your desired port
const bodyParser = require('body-parser');
const cors = require("cors");
const responseMiddleware = require('./helpers/responseMiddleware')
app.use(responseMiddleware)
require("../db")
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes =  require('./api/routes')
app.use('/api',routes)
// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// const allRoutes =  require('./api/routes');
// app.use(allRoutes)
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
