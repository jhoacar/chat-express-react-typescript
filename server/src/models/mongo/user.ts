/* eslint-disable class-methods-use-this */
import { User as UserBase, UserQuery, UserSchema } from '@models/schemas';
import { model, Schema } from 'mongoose';

UserBase.schema = new Schema({
  name: String,
  email: String,
  password: String,
});

UserBase.driver = model('User', UserBase.schema);

export default class User extends UserBase {
  async save() {
    const data: any = { ...this.user };
    // eslint-disable-next-line new-cap
    await new UserBase.driver(data).save();
    return this.user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(query: UserQuery) {
    const user: UserSchema = {
      id: 1,
      name: '',
      email: '',
      password: '',
      createdAt: '',
      updatedAt: '',
    };
    return [user];
  }

  async findOne() {
    const user: UserSchema = {
      id: 1,
      name: '',
      email: '',
      password: '',
      createdAt: '',
      updatedAt: '',
    };
    return user;
  }

  async updateOne() {
    const user: UserSchema = {
      id: 1,
      name: '',
      email: '',
      password: '',
      createdAt: '',
      updatedAt: '',
    };
    return user;
  }

  async deleteOne() {
    const user: UserSchema = {
      id: 1,
      name: '',
      email: '',
      password: '',
      createdAt: '',
      updatedAt: '',
    };
    return user;
  }

  async update() {
    const user: UserSchema = {
      id: 1,
      name: '',
      email: '',
      password: '',
      createdAt: '',
      updatedAt: '',
    };
    return user;
  }
}
