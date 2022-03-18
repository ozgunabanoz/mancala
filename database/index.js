const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

exports.dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.error(error);
  }
};
