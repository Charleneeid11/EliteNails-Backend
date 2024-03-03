import { Schema, model } from 'mongoose';
import { type Category } from '../interfaces/Category';

const catgorySchema = new Schema<Category>(
    {
        name: { type: String, required: true }
    },
    { timestamps: true }
);

const categorymodel = model<Category>('Category', catgorySchema);

export default categorymodel;
