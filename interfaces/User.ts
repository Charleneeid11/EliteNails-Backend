import type mongoose from 'mongoose';

export interface User {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
    password: string;
    usertype: 'Admin' | 'Employee';
    code: number;
    verified: boolean;
}
