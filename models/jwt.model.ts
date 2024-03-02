import mongoose, { Schema, model } from "mongoose" 
import { JWT } from '../interfaces/JWT'

const jwtSchema = new Schema<JWT>({
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    expirydate: { type: Date, required: true },
    revoked: { type: Boolean, required: true }
}, { timestamps: true })

const jwtmodel = model<JWT>('JWT', jwtSchema);

export default jwtmodel;