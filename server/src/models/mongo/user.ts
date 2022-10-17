/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable new-cap */
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
    await new UserBase.driver(data).save();
    return this.user;
  }

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
