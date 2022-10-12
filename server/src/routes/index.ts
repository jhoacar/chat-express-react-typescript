import { Request, Response, Router } from 'express';
import { getVersion } from '@utils/package';
import api from './api';
import web from './web';

const router = Router();

const version = getVersion({ minimal: true });

const apiRoute = `/api/v${version}`;

router.use(apiRoute, api);
router.get('/api', (req: Request, res: Response) => {
  res.redirect(apiRoute);
});

router.use(web);

export default router;
