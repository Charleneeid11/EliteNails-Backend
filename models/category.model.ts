import mongoose, { Schema, model } from "mongoose" 
import { Category } from '../interfaces/Category'

const catgorySchema = new Schema<Category>({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
})

const categorymodel = model<Category>('Category', catgorySchema);

export default categorymodel;