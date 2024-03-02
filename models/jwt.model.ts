import mongoose, { Schema, model } from "mongoose" 
import { JWT } from '../interfaces/JWT'

const jwtSchema = new Schema<JWT>({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    userid: { type: Number, required: true },
    token: { type: String, required: true },
    expirydate: { type: String, required: true },
    creationdate: { type: String, required: true },
    revoked: { type: Boolean, required: true }
})

const jwtmodel = model<JWT>('JWT', jwtSchema);

export default jwtmodel;