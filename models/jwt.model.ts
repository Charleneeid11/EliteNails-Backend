import mongoose, { Schema, model } from 'mongoose';
import { type Token } from '../interfaces/Token';

const tokenSchema = new Schema<Token>(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        token: { type: String, required: true },
        expirydate: { type: Date, required: true },
        revoked: { type: Boolean, required: true },
        type: { type: String, required: true, enum: ['Access', 'Refresh'] }
    },
    { timestamps: true }
);

const tokenmodel = model<Token>('Token', tokenSchema);

export default tokenmodel;
