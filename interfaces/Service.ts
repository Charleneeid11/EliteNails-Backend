import mongoose from "mongoose";

export interface Service {
    id: mongoose.Schema.Types.ObjectId,
    name: string,
    price: number,
    categoryid: mongoose.Schema.Types.ObjectId,
}