import mongoose from "mongoose";

export interface JWT {
    id: mongoose.Schema.Types.ObjectId,
    userid: number,
    token: string,
    expirydate: string,
    creationdate: string,
    revoked: boolean
}