import mongoose, { Schema, model } from "mongoose" 
import { Contactinfo } from '../interfaces/Contactinfo'

const contactinfoSchema = new Schema<Contactinfo>({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    phonenum: { type: String, required: true },
    whatsappnum: { type: String, required: true },
    instalink: { type: String, required: true },
    instaname: { type: String, required: true }
})

