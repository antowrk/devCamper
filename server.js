const express = require('express');
const dotenv = require('dotenv');

//Route Files
const bootcamps = require('./routes/bootcamps')

//Load env vars
dotenv.config({ path: 'config/config.env' });


const app = express();


//Mount Routes
app.use('/api/v1/bootcamps', bootcamps);



//Server
const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode at PORT ${PORT}`)
);