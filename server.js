const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: 'config/config.env' });


const app = express();


//Server
const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode at PORT ${PORT}`)
);