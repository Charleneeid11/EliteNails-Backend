import mongoose, { Schema, model } from 'mongoose';
import { type Service } from '../interfaces/Service';

const serviceSchema = new Schema<Service>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        categoryid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Category'
        },
        gender: { type: String, required: true, enum: ['Male', 'Female', 'Both'] }
    },
    { timestamps: true }
);

const servicemodel = model<Service>('User', serviceSchema);

export default servicemodel;
