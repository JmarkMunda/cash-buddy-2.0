import { Document, Model } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserMethods {
  comparePassword(): void;
}

export type UserDoc = IUser & Document;

export type UserModel = Model<IUser, {}, IUserMethods>;
