import { Schema, model, models } from "mongoose";
import isEmail from "validator/es/lib/isEmail";
import { UserDoc, UserModel } from "../typings";
import bcrypt from "bcrypt";

const userSchema = new Schema<UserDoc, UserModel>({
  username: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      {
        validator: (value: string) => isEmail(value),
        message: "Invalid email address",
      },
    ],
  },
  password: { type: String, required: true, minLength: 8 },
});

userSchema.pre("save", (next) => {
  const user = this as unknown as UserDoc;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });

  userSchema.method(
    "comparePassword",
    function comparePassword(password, callback) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) callback(err);
        callback(null, result);
      });
    }
  );
});

const User = model<UserDoc, UserModel>("User", userSchema);

export default User;
