import { Router, NextFunction } from 'express';
import usersRouter from './usersRouter';
import ApiError from 'errors/error';
import cardsRouter from './cardsRouter';

const router = Router();

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use((_req, _res, next: NextFunction) => next(ApiError.notFound('Запрашиваемый ресурс не найден')));

export default router;