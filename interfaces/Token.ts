import type mongoose from 'mongoose';

export interface Token {
    id: mongoose.Schema.Types.ObjectId;
    userid: mongoose.Schema.Types.ObjectId;
    token: string;
    expirydate: Date;
    creationdate: Date;
    type: string;
    revoked: boolean;
}

export interface tokenReturn {
    token: string;
    expiryDate: Date;
}
