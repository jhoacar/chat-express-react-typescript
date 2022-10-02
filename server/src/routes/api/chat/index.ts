import { handleChat } from '@controllers/chat';
import { authMiddleware } from '@middlewares/auth';
import { Router } from 'express';

const router = Router();

router.get('/', authMiddleware, handleChat);

export default router;
