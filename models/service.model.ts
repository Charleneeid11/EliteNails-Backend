import mongoose, { Schema, model } from "mongoose" 
import { Service } from '../interfaces/Service'

const serviceSchema = new Schema<Service>({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryid: { type: Number, required: true },
})

const servicemodel = model<Service>('User', serviceSchema); 

export default servicemodel;
