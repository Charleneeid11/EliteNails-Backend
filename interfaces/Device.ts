import mongoose from "mongoose";

export interface Device {
    id: mongoose.Schema.Types.ObjectId,
    devicetype: string,
    os: string,
    ipaddress: string,
    userid: number,
    jwtid: number
}