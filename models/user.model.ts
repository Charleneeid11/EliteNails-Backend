import { Schema, model } from 'mongoose';
import type { User } from '../interfaces/User';

const userSchema = new Schema<User>(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        usertype: { type: String, required: true, enum: ['Admin', 'Employee'] },
        code: { type: Number, required: false },
        verified: { type: Boolean, required: true }
    },
    { timestamps: true }
);

const usermodel = model<User>('User', userSchema);

export default usermodel;
