import type mongoose from 'mongoose';

export interface Device {
    id: mongoose.Schema.Types.ObjectId;
    devicetype: string;
    os: string;
    ipaddress: string;
    userid: mongoose.Schema.Types.ObjectId;
    jwtid: mongoose.Schema.Types.ObjectId;
}
