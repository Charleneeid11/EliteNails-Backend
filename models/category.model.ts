import mongoose, { Schema, model } from "mongoose" 
import { Category } from '../interfaces/Category'

const catgorySchema = new Schema<Category>({
    name: { type: String, required: true },
}, { timestamps: true })

const categorymodel = model<Category>('Category', catgorySchema);

export default categorymodel;