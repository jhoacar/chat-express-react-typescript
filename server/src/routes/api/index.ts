import {
  json, Request, Response, Router, urlencoded,
} from 'express';

import { readdirSync } from 'fs';
import cors from 'cors';

const router = Router();

router.use(json());
router.use(urlencoded({ extended: false }));
router.use(cors());
/**
 * We use a dynamic import for all
 * subfolders in api folder
 */
readdirSync(__dirname, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => import(`./${file.name}`)
    .then((module: any) => {
      router.use(`/${file.name}`, module.default);
    })
    .catch((error: Error) => {
      throw new Error(
        `An error has ocurred importing ${file.name}: ${error.message}`,
      );
    }));

router.get('/', (req: Request, res: Response) => {
  res.redirect(`${req.originalUrl}/docs`);
});

export default router;
