import { sign, verify } from 'jsonwebtoken';

const privateKey = process.env.JWT_PRIVATE_KEY || 'key';
const expiresIn = process.env.JWT_EXPIRES_IN || 3600;

export function getJWT(payload: object): string {
  return sign(payload, privateKey, {
    expiresIn,
  });
}

export function validateJWT(token: string): object {
  return verify(token, privateKey) as object;
}
