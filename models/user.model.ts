import mongoose, { Schema, model, mongo } from 'mongoose';
import { User } from '../interfaces/User';

const userSchema = new Schema<User>(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        usertype: { type: String, required: true, enum: ['Admin', 'Employee'] },
    },
    { timestamps: true },
);

const usermodel = model<User>('User', userSchema);

export default usermodel;
