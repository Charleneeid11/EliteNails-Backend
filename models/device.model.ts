import mongoose, { Schema, model } from "mongoose" 
import { Device } from '../interfaces/Device'

const deviceSchema = new Schema<Device>({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    devicetype: { type: String, required: true },
    os: { type: String, required: true },
    ipaddress: { type: String, required: true },
    userid: { type: Number, required: true },
    jwtid: { type: Number, required: true }
})

const devicemodel = model<Device>('Device', deviceSchema);

export default devicemodel;