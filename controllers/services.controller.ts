import { type Service } from '../interfaces/Service';
import ServiceModel from '../models/service.model';
import { type Request, type Response } from 'express';
import categorymodel from '../models/category.model';
import { type ObjectId } from 'mongodb';
import { type Category } from '../interfaces/Category';

const getAllServices = async (req: Request, res: Response): Promise<void> => {
    try {
        const services: Service[] = await ServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching services.' });
    }
};

const createService = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, categoryid, gender } = req.body as { name: string, price: number, categoryid: ObjectId, gender: string };
        // find if category exists.
        const category: Category | null = await categorymodel.findById(categoryid);
        // if it doesnt then respond with bad request status
        if (category === null) {
            res.status(400).json({ error: 'Category is not found.' });
            return;
        }
        // if it exists create the service
        const newService = new ServiceModel({
            name,
            price,
            categoryid,
            gender
        });
        const savedService = await newService.save();

        res.status(201).json(savedService);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while attempting to create the service.' });
    }
};

const deleteService = async (req: Request, res: Response): Promise<void> => {
    try {
        await ServiceModel.findByIdAndDelete(req.params.serviceId);
        res.status(200).json({ message: 'Successfully deleted service.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to delete the service' });
    }
};

const editService = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, categoryid, gender } = req.body as { name: string, price: number, categoryid: ObjectId, gender: string };
        console.log('service id:', req.params.serviceId);
        const foundService: Service | null = await ServiceModel.findByIdAndUpdate(req.params.serviceId, {
            name,
            price,
            categoryid,
            gender
        });
        if (foundService === null) {
            res.status(404).json({ message: 'Service not found' });
            return;
        }
        res.status(200).json({ message: 'Service edited successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to update the service.' });
    }
};

const getServiceByGender = async (req: Request, res: Response): Promise<void> => {
    try {
        const { gender } = req.body as { gender: string };
        const servicesneeded: Service [] = await ServiceModel.find({ gender: { $in: [gender, 'Both'] } });
        res.status(200).json(servicesneeded);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to fetch services for this specific gender.' });
    }
};

export default {
    getAllServices,
    createService,
    deleteService,
    editService,
    getServiceByGender
};
