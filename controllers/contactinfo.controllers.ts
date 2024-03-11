import { type Request, type Response } from 'express';
import ContactInfoModel from '../models/contactinfo.model';

const addContactInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phonenum, whatsappnum, instalink, instaname } = req.body as {
            phonenum: string, whatsappnum: string, instalink: string, instaname: string
        };
        const contactinfo = new ContactInfoModel({
            phonenum,
            whatsappnum,
            instalink,
            instaname
        });
        await contactinfo.save();
        res.status(200).json({ message: 'Contact info has been succesfully saved.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to add contact information.' });
    }
};

const getContactInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const contactinfo = await ContactInfoModel.find();
        res.status(200).json(contactinfo);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred of while attempting to fetch contact information.' });
    }
};

export default {
    addContactInfo,
    getContactInfo
};
