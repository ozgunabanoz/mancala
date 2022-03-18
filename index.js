const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');
const { dbConnect } = require('./database');
const { router } = require('./routes');
const { notFoundHandler, errorHandler } = require('./middlewares');

const app = express();

app.use(cors());
app.use(express.json());
router(app);
app.use(notFoundHandler); // for handling unkwown routes
app.use(errorHandler); // handle error messages

app.listen(PORT, async () => {
  console.log(`Server started at PORT ${PORT}`);

  await dbConnect(); // connect to db
});
