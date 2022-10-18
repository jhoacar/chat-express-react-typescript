import { Router, static as Static } from 'express';

import clientDirname from '@client';

const router = Router();

router.use(Static(clientDirname));

router.use('/*', (_, res) => {
  res.sendFile(`${clientDirname}/index.html`);
});

export default router;
