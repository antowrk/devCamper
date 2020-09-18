const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors')
const logger = require('./middleware/logger');
const connectDB = require('./config/db')

//Load env vars
dotenv.config({ path: 'config/config.env' });

//MongoDB Connection
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps')


//Instance Of Express
const app = express();


//Logging MiddleWare and  Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  //app.use(logger);
}


//Mount Routes
app.use('/api/v1/bootcamps', bootcamps);



//Server
const PORT = process.env.PORT

const server = app.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode at PORT ${PORT}`.yellow.bold)
);

//UnhandledRejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold.underline);
  //Close Server
  server.close(() => process.exit(1));
})