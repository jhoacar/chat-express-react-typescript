import { UserSchema } from '@models/schemas';
import { validateJWT } from '@utils/jwt';
import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const loginValidation = async (req: Request, res: Response) => {
  const validations = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];
  return Promise.all(
    validations.map((callback) => callback(req, res, () => {})),
  );
};

export const loginMiddleware = async (
  req: Request,
  res: Response,
  nxt: NextFunction,
) => {
  await loginValidation(req, res);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return nxt();
};

export const authMiddleware = (
  req: Request,
  res: Response,
  nxt: NextFunction,
) => {
  try {
    const jwt = req.headers.authorization as string;

    if (!jwt) {
      return res.status(400).json({ errors: ['Token is required'] });
    }

    req.user = validateJWT(jwt) as UserSchema;

    if (!req.user) {
      return res.status(400).json({ errors: ['Token invalid'] });
    }

    return nxt();
  } catch (error: any) {
    return res.status(400).json({ errors: [{ message: error.message }] });
  }
};
