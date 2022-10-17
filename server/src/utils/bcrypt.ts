import { hash, compare } from 'bcrypt';

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10');

export async function encryptPassword(plainPassword: string) {
  return hash(plainPassword, saltRounds);
}

export async function decryptPassword(
  plainPassword: string,
  encryptedPassword: string,
) {
  return compare(plainPassword, encryptedPassword);
}
