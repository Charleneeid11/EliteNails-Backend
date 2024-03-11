import { type Request, type Response } from 'express';
import { type Category } from '../interfaces/Category';
import CategoryModel from '../models/category.model';

const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories: Category[] = await CategoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to fetch categories.' });
    }
};

const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body as { name: string };
        const newCategory = new CategoryModel({ name });
        const savedCategory = await newCategory.save();
        res.status(201).json({ savedCategory });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to create Category.' });
    }
};

const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        await CategoryModel.findByIdAndDelete(req.params.categoryid);
        res.status(200).json({ message: 'Category successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to delete Category' });
    }
};

const editCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body as { name: string };
        await CategoryModel.findByIdAndUpdate(req.params.categoryid, {
            name
        });
        res.status(201).json({ message: 'Category has been successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while attempting to edit Category.' });
    }
};

export default {
    getAllCategories,
    createCategory,
    deleteCategory,
    editCategory
};
