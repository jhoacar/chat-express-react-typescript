/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { User as UserModel } from '@models';
import { User } from '@models/schemas';
import { getJWT } from '@utils/jwt';
import { decryptPassword } from '@utils/bcrypt';

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel();

    const user = await userInstance.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ error: 'bad request' });
    }

    const validatedPassword = await decryptPassword(req.body.password, user.password);

    if (!validatedPassword) {
      return res.status(400).json({ error: 'bad request' });
    }

    const token = getJWT({ ...user, password: undefined });

    return res.status(200)
      .send({
        message: 'User logged in succesfully',
        body: {
          token,
          user: { ...user, password: undefined },
        },
      });
  } catch (error: any) {
    console.log(error);

    return res.status(500)
      .send({
        errors: [{ message: error.message }],
      });
  }
};
