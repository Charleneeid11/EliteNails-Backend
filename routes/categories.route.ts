import express, { type Router } from 'express';
import CategoryController from '../controllers/categories.controllers';
import middleware from '../middlewares/validation.middleware';
import { createCategorySchema, deleteCategorySchema, editCategorySchema } from '../validation/categories.validation';

const router: Router = express.Router();

router.get('/', CategoryController.getAllCategories);
router.post('/', middleware(createCategorySchema), CategoryController.createCategory);
router.delete('/:categoryid', middleware(deleteCategorySchema), CategoryController.deleteCategory);
router.put('/:categoryid', middleware(editCategorySchema), CategoryController.editCategory);

export default router;
