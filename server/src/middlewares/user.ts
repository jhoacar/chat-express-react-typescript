import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const registerValidation = async (req:Request, res:Response) => {
  const validations = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];
  return Promise.all(validations.map((callback) => callback(req, res, () => {})));
};

export const userRegisterMiddleware = async (req:Request, res: Response, nxt: NextFunction) => {
  await registerValidation(req, res);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return nxt();
};

export default {
  userRegisterMiddleware,
};
