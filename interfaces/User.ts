import mongoose from 'mongoose';

export interface User {
    id: mongoose.Schema.Types.ObjectId;
    email: string;
    password: string;
    usertype: 'Admin' | 'Employee';
}
