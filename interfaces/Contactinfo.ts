import type mongoose from 'mongoose';

export interface Contactinfo {
    id: mongoose.Schema.Types.ObjectId;
    phonenum: string;
    whatsappnum: string;
    instalink: string;
    instaname: string;
}
