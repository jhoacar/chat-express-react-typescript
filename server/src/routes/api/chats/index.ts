import { index } from '@controllers/chat';
import { auth } from '@middlewares/auth';
import { Router } from 'express';

const router = Router();

router.get('/', auth, index);

export default router;
