const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.bold.underline);
};

module.exports = connectDB