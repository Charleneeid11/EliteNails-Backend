import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { type ObjectId } from 'mongoose';

config();

export const generateAccessToken = (userid: ObjectId): string => {
    const secret: string = process.env.JWT_SECRET ?? 'Joupi';
    return jwt.sign({ userid }, secret, { expiresIn: '1h' });
};

export const generateRefreshToken = (userid: ObjectId): string => {
    const secret: string = process.env.JWT_SECRET ?? 'Joupi';
    return jwt.sign({ userid }, secret, { expiresIn: '7d' });
};
