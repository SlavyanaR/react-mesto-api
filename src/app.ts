import express, { NextFunction, Request } from 'express';

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
const DBURL = process.env.DB_URL || 'mongodb://localhost:27017/mestodb';

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})