import mongoose, { Schema, model } from 'mongoose';
import { type Token } from '../interfaces/Token';

const refreshTokenSchema = new Schema<Token>(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        token: { type: String, required: true },
        expirydate: { type: Date, required: true },
        revoked: { type: Boolean, required: true }
    },
    { timestamps: true }
);

const refreshtokenmodel = model<Token>('RefreshToken', refreshTokenSchema);

export default refreshtokenmodel;
