require('dotenv').config()
import express, { NextFunction, Request } from 'express';
import mongoose from 'mongoose';
import router from './routes/index';
import errorHandler from './middleware/ErrorHandlingMiddleware';
import { requestIdHandler } from './types/appRequest';

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 3000;
const DBURL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/mestodb';

const app = express();
app.use(express.json());

app.use(requestIdHandler as express.RequestHandler);

app.use('/', router);

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(`${DBURL}`);

    app.listen(PORT,
      () => console.log(`Server start ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()