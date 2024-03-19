import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { type ObjectId } from 'mongoose';
import { type tokenReturn } from '../interfaces/Token';

config();

export const generateAccessToken = (userid: ObjectId): tokenReturn => {
    const secret: string = process.env.JWT_SECRET ?? 'Joupi';
    const token: string = jwt.sign({ userid }, secret, { expiresIn: '1h' });
    // expiry date in an hour
    const expiryDate: Date = new Date(Date.now() + 60 * 60 * 1000);
    return { token, expiryDate };
};

export const generateRefreshToken = (userid: ObjectId): tokenReturn => {
    const secret: string = process.env.JWT_SECRET ?? 'Joupi';
    const token: string = jwt.sign({ userid }, secret, { expiresIn: '7d' });
    const expiryDate: Date = new Date(Date.now() + 60 * 60 * 1000);
    return { token, expiryDate };
};
