import type mongoose from 'mongoose';

export interface Device {
    id: mongoose.Schema.Types.ObjectId;
    devicetype: string;
    os: string;
    location: string;
    userid: mongoose.Schema.Types.ObjectId;
    accessid: mongoose.Schema.Types.ObjectId;
    refreshid: mongoose.Schema.Types.ObjectId;
}

export interface DeviceSummary {
    deviceType: string;
    operatingSystem: string;
}
