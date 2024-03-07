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
        const { name, price, categoryid } = req.body as { name: string, price: number, categoryid: ObjectId };
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
            categoryid
        });

        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (error) {
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
        const { name, price, categoryid } = req.body as { name: string, price: number, categoryid: ObjectId };
        await ServiceModel.findByIdAndUpdate(req.params.serviceId, {
            name,
            price,
            categoryid
        });
        res.status(204).json({ message: 'Service updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to update the service.' });
    }
};

export default {
    getAllServices,
    createService,
    deleteService,
    editService
};
