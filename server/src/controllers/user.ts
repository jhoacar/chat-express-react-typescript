import { User as UserModel } from '@models';
import { User } from '@models/schemas';
import { encryptPassword } from '@utils/bcrypt';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel(req.body);

    userInstance.user.password = await encryptPassword(req.body.password);

    const userSaved = await userInstance.save();

    delete userSaved.password;

    res.status(201).send({
      message: 'User created successfully',
      body: userSaved,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).send({
      errors: [{ msg: error.message }],
    });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel();

    const userDeleted = await userInstance.deleteOne(req.body);

    res.status(200).send({
      message: 'User deleted successfully',
      body: userDeleted,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).send({
      errors: [{ msg: error.message }],
    });
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel();

    const users = await userInstance.find(req.query);

    res.status(200).send({
      message: 'Users',
      body: users.map((dbUser) => ({ ...dbUser, password: undefined })),
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).send({
      errors: [{ msg: error.message }],
    });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel();

    const user = await userInstance.findOne(req.params);

    res.status(200).send({
      message: 'User',
      body: user,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).send({
      errors: [{ msg: error.message }],
    });
  }
};
