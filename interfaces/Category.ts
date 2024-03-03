import mongoose from 'mongoose';

export interface Category {
    id: mongoose.Schema.Types.ObjectId;
    name: String;
}
