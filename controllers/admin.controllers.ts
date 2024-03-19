import { type Request, type Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';
import sendEmail from '../services/email';
import { type ObjectId } from 'mongodb';
import { type User } from '../interfaces/User';
import { generateAccessToken, generateRefreshToken } from '../services/jwt.service';
import JwtModel from '../models/jwt.model';
import summarizeAndStoreDeviceInfo from '../services/useragent.service';
import { type DeviceSummary } from '../interfaces/Device';
import geoip, { type Lookup } from 'geoip-lite';
import DeviceModel from '../models/device.model';

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body as { email: string, password: string };
        const hashedPassword = await bcrypt.hash(password, 10);
        const code = Math.floor(100000 + Math.random() * 900000);
        const content = `Welcome to Elite Nails Studio Admin Panel!\n\n This is your 6 digit verification code: ${code}\nBest\nElite Nails System.`;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        await sendEmail(email, 'Elite Nails-Verification Code', content);
        const user = new UserModel({ email, password: hashedPassword, usertype: 'Employee', code, verified: false });
        await user.save();
        res.status(200).json({ message: 'A 6 digit verification code has been sent to your email.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while attempting to register.' });
    }
};

const verify = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userid, code } = req.body as { userid: ObjectId, code: number };
        const user: User | null = await UserModel.findById(userid);
        if (user === null) {
            res.status(400).json({ error: 'You entered an invalid user id.' });
            return;
        }
        const actualcode = user.code;
        if (code !== actualcode) {
            res.status(400).json({ error: 'The code you provided isn\'t valid' });
            return;
        }
        await UserModel.findByIdAndUpdate(userid, { verified: true, code: null });
        res.status(200).json({ message: 'Successfully verified.' });
    } catch (error) {
        res.status(500).json({ error: 'An error has occurred while attempting to verify user. ' });
    }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to fetch all users.' });
    }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userid = req.params.userid;
        const userdeleted = await UserModel.findByIdAndDelete(userid);
        if (userdeleted === null) {
            res.status(400).json({ error: 'User of this id does not exist.' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to delete user.' });
    }
};

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        // get data from request
        const { email, password } = req.body as { email: string, password: string };
        // validate user exists
        const userFound: User[] | null = await UserModel.find({ email });
        if (userFound === null) {
            res.status(400).json({ error: 'No user is found with this email' });
            return;
        }
        const userid = userFound[0]._id;
        //  compare passwords using bcrypt
        const comparison = await bcrypt.compare(password, userFound[0].password);
        if (!comparison) {
            res.status(400).json({ error: 'Incorrect password' });
            return;
        }
        const { token: accesstoken, expiryDate: accessExpiryDate } =
            generateAccessToken(userFound[0]._id);
        const newAccessToken = new JwtModel({
            userid,
            token: accesstoken,
            expirydate: accessExpiryDate,
            revoked: false,
            type: 'Access'
        });
        await newAccessToken.save();
        // create refresh token and store in db
        const { token: refreshtoken, expiryDate: refreshExpiryDate } =
            generateRefreshToken(userFound[0]._id);
        const newRefreshToken = new JwtModel({
            userid,
            token: refreshtoken,
            expirydate: refreshExpiryDate,
            revoked: false,
            type: 'Refresh'
        });
        await newRefreshToken.save();
        // create access token and store in db
        const deviceDetails: DeviceSummary = summarizeAndStoreDeviceInfo(req.useragent);
        const locationData: Lookup | null = geoip.lookup(req.ip ?? '0.0.0.0');
        const country = locationData?.country;
        const city = locationData?.city;
        const location = `${city}, ${country}`;
        const device = new DeviceModel({ devicetype: deviceDetails.deviceType, os: deviceDetails.operatingSystem, location, userid, accessid: newAccessToken._id, refreshid: newRefreshToken._id });
        await device.save();
        res.status(200).json({ accesstoken, refreshtoken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while attempting to login.' });
    }
};

const editAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, usertype } = req.body as { email: string, usertype: string };
        const userid = req.params.userid;
        const userUpdated = await UserModel.findByIdAndUpdate(userid, { email, usertype });
        if (userUpdated === null) {
            res.status(400).json({ error: 'User to be edited not found.' });
            return;
        }
        res.status(200).json({ message: 'User was updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to edit user.' });
    }
};

export default {
    register,
    verify,
    getUsers,
    deleteUser,
    login,
    editAccount
};
