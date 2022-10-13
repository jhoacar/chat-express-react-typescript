/* eslint-disable import/prefer-default-export */
import { User } from '@models';
import { UserSchema } from '@models/schemas';
import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const registerValidation = async (req: Request, res: Response) => {
  const validations = [
    body('name').isLength({ min: 1 }),

    body('email')
      .isEmail()
      .custom((value: string) => {
        const user = new User();

        return user
          .findOne({ email: value })
          .then((result: UserSchema) => {
            if (result && result.id) {
              return Promise.reject(
                new Error('Email already exists'),
              );
            }

            return Promise.resolve();
          });
      }),

    body('password').isLength({ min: 5 }),
  ];

  return Promise.all(
    validations.map((callback) => callback(req, res, () => {})),
  );
};

const deleteValidation = async (req: Request, res: Response) => {
  const validations = [
    body('email')
      .isEmail()
      .custom((value: string) => {
        const user = new User();

        return user
          .findOne({ email: value })
          .then((result: UserSchema) => {
            if (result && result.id) Promise.resolve();

            return Promise.reject(new Error("Email doesn't exist"));
          });
      }),
  ];
  return Promise.all(
    validations.map((callback) => callback(req, res, () => {})),
  );
};

export const create = async (
  req: Request,
  res: Response,
  nxt: NextFunction,
) => {
  await registerValidation(req, res);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return nxt();
};

export const destroy = async (
  req: Request,
  res: Response,
  nxt: NextFunction,
) => {
  await deleteValidation(req, res);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return nxt();
};
