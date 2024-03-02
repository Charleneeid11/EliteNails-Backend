import mongoose from "mongoose";

export interface User {
    id: mongoose.Schema.Types.ObjectId,
    email: string,
    password: string,
    usertype: { 
        type: String, 
        required: true,
        enum: ['Admin', 'Employee']
    },
}

