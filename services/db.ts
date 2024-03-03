// db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    if (process.env.MONGO_URI === undefined) {
        throw new Error('MONGO_URI is not defined in your env file');
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
