import mongoose, { Schema, model } from 'mongoose';
import { type Token } from '../interfaces/Token';

const accessTokenSchema = new Schema<Token>(
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

const accesstokenmodel = model<Token>('AccessToken', accessTokenSchema);

export default accesstokenmodel;
