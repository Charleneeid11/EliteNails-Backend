import { Schema, model } from 'mongoose';
import { type Category } from '../interfaces/Category';

const categorySchema = new Schema<Category>(
    {
        name: { type: String, required: true }
    },
    { timestamps: true }
);

const categorymodel = model<Category>('Category', categorySchema);

export default categorymodel;
