const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI; // MONGODB URI STRING
const PORT = process.env.PORT || 3000; // PORT

module.exports = { PORT, MONGODB_URI };
