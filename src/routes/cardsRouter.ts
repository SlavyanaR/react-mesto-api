import { Router } from 'express';
import cardsController from '../controllers/cards';

const router = Router();

router.get('/', cardsController.getAllCards);
router.post('/', cardsController.createCard);
router.delete('/:cardId', cardsController.removeCard);

export default router;