require('dotenv').config()
import mongoose from 'mongoose';
import express, { NextFunction, Request } from 'express';
import router from './routes/index';
import { requestIdHandler } from 'type/appRequest';

mongoose.set("strictQuery", true);
const PORT = process.env.PORT || 5003;
const DBURL = process.env.DB_URL || 'mongodb://127.0.0.1:2701/mestodb';

const app = express();

app.use(express.json());
app.use(requestIdHandler as express.RequestHandler);
app.use('/', router);

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