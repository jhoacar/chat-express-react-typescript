import { Router, static as Static } from 'express';

import clientDirname from '@client';

const router = Router();

router.use(Static(clientDirname));

export default router;
