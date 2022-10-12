import { UserSchema } from '@models/schemas';

declare global {
  namespace Express {
    interface Request {
      user?: UserSchema
    }
  }
}
