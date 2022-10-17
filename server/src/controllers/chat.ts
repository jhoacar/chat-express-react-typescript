import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
  try {
    return res.status(200).send({
      message: 'You are in chat',
      body: {
        user: req.user,
      },
    });
  } catch (error: any) {
    console.log(error);

    return res.status(500).send({
      errors: [{ message: error.message }],
    });
  }
};
