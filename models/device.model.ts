import mongoose, { Schema, model } from 'mongoose';
import { Device } from '../interfaces/Device';

const deviceSchema = new Schema<Device>(
    {
        devicetype: { type: String, required: true },
        os: { type: String, required: true },
        ipaddress: { type: String, required: true },
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        jwtid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'JWT',
        },
    },
    { timestamps: true },
);

const devicemodel = model<Device>('Device', deviceSchema);

export default devicemodel;
