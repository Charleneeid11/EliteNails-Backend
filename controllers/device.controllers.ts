import { type Request, Response } from 'express';
import DeviceModel from '../models/device.model';
import JWTModel from '../models/jwt.model';

const getAllLoggedInDevices = async (req: Request, res: Response): Promise<void> => {
    try {
        const loggedInDevices = await DeviceModel.aggregate([
            {
                $lookup: {
                    from: 'tokens',
                    localField: 'refreshid',
                    foreignField: '_id',
                    as: 'refreshTokenDetails'
                }
            },
            { $unwind: '$refreshTokenDetails' },
            {
                $match: {
                    'refreshTokenDetails.expirydate': { $gt: new Date() },
                    'refreshTokenDetails.revoked': false,
                    'refreshTokenDetails.type': 'Refresh'
                }
            }
        ]);
        res.status(200).json(loggedInDevices);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to get all logged in devices.' });
    }
};

const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        const device = await DeviceModel.findById(req.params._id);
        if (device === null) {
            res.status(400).json({ error: 'Device does not exist.' });
            return;
        }
        const { accessid, refreshid } = device;
        await JWTModel.findByIdAndUpdate(accessid, { revoked: true });
        await JWTModel.findByIdAndUpdate(refreshid, { revoked: true });
        await device.deleteOne();
        res.status(200).json({ message: 'Log out successful.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to logout.' });
    }
};

export default {
    getAllLoggedInDevices,
    logout
};
