const mongoose = require('mongoose');

//fxn to connect to the mongodb
const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection established');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    await mongoose.connect(`${process.env.MONGO_URI}/procure`);

  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit the process if DB fails
  }
};

module.exports = connectDB;
